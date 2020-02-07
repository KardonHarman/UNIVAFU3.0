import { Directive, Input, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appCarousel]'
})
export class CarouselDirective {

  public activeLocation: number = 0;
  public activeKey: number = 0;
  public positionX: number = 0;
  public snapLocations: any = [];
  public deviceWidth: number;
  @Input() totalImgs: any;
  @Input() spinner: any;

  constructor(public el: ElementRef, public renderer: Renderer2) {

    setTimeout(() => {
      let indicadores = document.querySelectorAll('.indicadores') as HTMLCollectionOf<HTMLElement>;
      for (let i = 0; i < indicadores.length; i++) {
        indicadores[i].addEventListener('click', (event) => this.onIndicadoresClick(event, i, indicadores));
      }

    })

  }

  @HostListener('panstart', ['$event']) protected onPanStart(event) {
    event.preventDefault();
    this.renderer.removeClass(this.el.nativeElement, 'animate');

    let parallax = document.querySelectorAll('.parallax') as HTMLCollectionOf<HTMLElement>;

    for (var i = 0; i < parallax.length; i++) {
      parallax[i].classList.remove('animate');
    }
  }

  @HostListener('panmove', ['$event']) protected onPanMove(event) {
    event.preventDefault();
    this.positionX = this.activeLocation + event.deltaX;

    this.renderer.setStyle(this.el.nativeElement, 'transform', 'translate3d(' + this.positionX + 'px,0px,0px)');

    let parallax = document.querySelectorAll('.parallax') as HTMLCollectionOf<HTMLElement>;

    for (var i = 0; i < parallax.length; i++) {
      if (this.activeKey == i) {
        parallax[i].style.zIndex = '0';
        parallax[i].style.transform = 'translate3d(' + (event.deltaX * - 0.8) + 'px, 0px, 0px)';
      }
      else {
        parallax[i].style.zIndex = '1';
        parallax[i].style.transform = 'translate3d(' + (event.deltaX * 0.1) + 'px, 0px, 0px)';
      }
    }
  }

  @HostListener('panend', ['$event']) protected onPanEnd(event) {
    event.preventDefault();
    var parallax = document.querySelectorAll('.parallax') as HTMLCollectionOf<HTMLElement>;

    this.renderer.addClass(this.el.nativeElement, 'animate');
    for (var i = 0; i < parallax.length; i++) {
      parallax[i].classList.add('animate');
    }

    var snap = this.calculate_snap_location(this.positionX);
    this.activeLocation = snap.value;

    this.renderer.setStyle(this.el.nativeElement, 'transform', 'translate3d(' + this.activeLocation + 'px, 0px, 0px)');

    for (let i = 0; i < parallax.length; i++) {
      parallax[i].style.transform = 'translate3d(0px, 0px, 0px)';
    }

    this.activeKey = snap.key;

    let indicadores = document.querySelectorAll('.indicadores') as HTMLCollectionOf<HTMLElement>;
    for (let i = 0; i < indicadores.length; i++) {
      if (this.activeKey != i)
        indicadores[i].classList.remove('active');
      else
        indicadores[i].classList.add('active');
    }
  }

  ngOnInit(): void {

    setTimeout(() => {

      this.deviceWidth = this.el.nativeElement.parentElement.offsetWidth;

      this.setCarouselWidth();

      this.setSnap();
    });
  }

  public calculate_snap_location = function (position) {
    let currentDiff: any;
    let minimumDiff: any;
    let bestSnap: any;
    let bestKey: any;

    for (let i = 0; i < this.snapLocations.length; i++) {

      currentDiff = Math.abs(this.positionX - this.snapLocations[i]);

      if (minimumDiff === undefined || currentDiff < minimumDiff) {
        minimumDiff = currentDiff;
        bestSnap = this.snapLocations[i];
        bestKey = i;
      }
    }

    return { key: bestKey, value: bestSnap };

  }

  onIndicadoresClick(event: any, key: number, indicadores) {

    for (let i = 0; i < indicadores.length; i++) {
      if (key == i)
        indicadores[i].classList.add('active');
      else
        indicadores[i].classList.remove('active');
    }

    this.renderer.addClass(this.el.nativeElement, 'animate');
    this.renderer.setStyle(this.el.nativeElement, 'transform', 'translate3d(' + this.snapLocations[key] + 'px, 0px, 0px)');
    this.activeLocation = this.snapLocations[key];
    this.activeKey = key;
  }

  setCarouselWidth() {

    this.renderer.setStyle(this.el.nativeElement.parentElement, 'width', this.deviceWidth + 'px');

    let carouselWidthTot: number = this.deviceWidth * this.totalImgs;
    this.renderer.setStyle(this.el.nativeElement, 'width', carouselWidthTot + 'px');

    for (let x = 0; x < this.totalImgs; x++) {
      this.renderer.setStyle(this.el.nativeElement.children[x], 'width', this.deviceWidth + 'px');
      this.renderer.addClass(this.el.nativeElement.children[x], 'showSlide');
    }

    this.renderer.setStyle(this.spinner._elementRef.nativeElement, 'display', 'none');
  }

  setSnap() {
    let calc: number;
    let cont: number = 0;

    for (let i = 0; i < this.totalImgs; i++) {

      if (cont == 0) {
        this.snapLocations.push(0);
      } else {
        calc = cont * -this.deviceWidth;
        this.snapLocations.push(calc);
      }

      cont++;
    }
  }

}
