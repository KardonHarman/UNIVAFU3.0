import { Component, OnInit, OnDestroy, Renderer2, ElementRef, ViewChild } from '@angular/core';
import { UvfService } from 'src/app/_services/uvf.service';
import { take, map, filter } from '../../../../node_modules/rxjs/operators';
import { MatDialog } from '../../../../node_modules/@angular/material';
import { NoticiasDialogComponent } from '../_dialogs/noticias-dialog/noticias-dialog.component';
import { Subscription, fromEvent } from '../../../../node_modules/rxjs';
import { Router } from '../../../../node_modules/@angular/router';
import { staggerAnim } from '../../_animations/animations';
import { NewsService } from 'src/app/_services/news.service';
import { New } from '../../models/news'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [staggerAnim]
})
export class HomeComponent implements OnInit, OnDestroy {

  noticias: New | any[] = [];
  resizeSub: Subscription;
  scrollSub: Subscription;
  public staggerStateIiu: string = "inactive";
  public staggerStateFundacion: string = "inactive";
  public staggerStateInnovagain: string = "inactive";
  public staggerStateIridh: string = "inactive";
  @ViewChild('iiu') public iiu: ElementRef;
  @ViewChild('fundacion') public fundacion: ElementRef;
  @ViewChild('innova') public innova: ElementRef;
  @ViewChild('iridh') public iridh: ElementRef;

  constructor(
    public _uvfService: UvfService,
    public newService : NewsService,
    private dialog: MatDialog,
    private render: Renderer2,
    public _router: Router) { }

  ngOnInit() {
    // this.loadNoticias();
    this.getNews();
    this.setResizeEvent();
    this.setScrollEvent();
  }

  ngOnDestroy() {
    this.resizeSub.unsubscribe();
    this.scrollSub.unsubscribe();
  }

  getNews(){
    this.newService.getNews()
      .subscribe(
        res =>{
          this.noticias = res
        },
        err => console.log(err)
      )
  }
  selectedNew(id: string){
    this._router.navigate(['/noticias', id])
  };

  


  // loadNoticias() {
  //   this._uvfService.loadNoticiasData().pipe(
  //     take(1),
  //     map((data: any) => {
  //       return data.body.noticias
  //     })
  //   ).subscribe((data: any) => {
  //     this.noticias = data;
  //   });
  // }

  openNoticia(noticia: any) {
    let dialogRef: any = this.dialog.open(NoticiasDialogComponent, {
      data: {
        noticiaData: noticia
      }
    });
  }

  onPropuestaEnter(element: Element, img: Element) {
    if (!this._uvfService.mobileQuery.matches) {
      return;
    }

    this.render.setStyle(element, 'transform', 'translateY(-120%)');
    this.render.setStyle(img.firstChild, 'filter', 'sepia(100%) brightness(80%)');
    this.render.setStyle(element.children[0], 'transform', 'scale(1)');
    this.render.setStyle(element.children[0], 'opacity', '1');
  }

  onPropuestaLeave(element: Element, img: Element) {
    if (!this._uvfService.mobileQuery.matches) {
      return;
    }

    this.render.setStyle(element, 'transform', 'translateY(0)');
    this.render.setStyle(img.firstChild, 'filter', 'sepia(0) brightness(100%)');
    this.render.setStyle(element.children[0], 'transform', 'scale(0)');
    this.render.setStyle(element.children[0], 'opacity', '0');
  }

  onServsEnter(el: Element) {
    if (!this._uvfService.mobileQuery.matches) {
      return;
    }

    if (el.children[0].classList.contains('serv-img')) {
      this.render.setStyle(el.children[0], 'transform', 'scale(1.1)');
      this.render.addClass(el.children[1], 'serv-animate-descs');
      this.render.setStyle(el.children[1].children[1], 'color', '#fff');
    } else {
      this.render.setStyle(el.children[1], 'transform', 'scale(1.1)');
      this.render.addClass(el.children[0], 'serv-animate-descs');
      this.render.setStyle(el.children[0].children[1], 'color', '#fff');
    }
  }

  onServsLeave(el: Element) {
    if (!this._uvfService.mobileQuery.matches) {
      return;
    }

    if (el.children[0].classList.contains('serv-img')) {
      this.render.setStyle(el.children[0], 'transform', 'scale(1)');
      this.render.removeClass(el.children[1], 'serv-animate-descs');
      this.render.setStyle(el.children[1].children[1], 'color', '#000');
    } else {
      this.render.setStyle(el.children[1], 'transform', 'scale(1)');
      this.render.removeClass(el.children[0], 'serv-animate-descs');
      this.render.setStyle(el.children[0].children[1], 'color', '#000');
    }
  }

  setResizeEvent() {
    this.resizeSub = fromEvent(window, 'resize')
      .pipe(
        map((event: any) => ({
          innerWidth: event.target.innerWidth
        }))
      ).subscribe((resize: any) => {
        this.dialog.closeAll();
      });
  }

  setScrollEvent() {
    this.scrollSub = fromEvent(window, 'scroll')
      .pipe(
        map((event: any) => ({
          sT: event.target.scrollingElement.scrollTop
        }))
      ).subscribe((scroll: any) => {

        let iiuElement: any = this.iiu.nativeElement.offsetTop - (document.querySelector('.mat-toolbar').scrollHeight * 5);
        if (scroll.sT >= iiuElement) {
          this.staggerStateIiu = 'active';
        }

        let fundacionElement: any = this.fundacion.nativeElement.offsetTop - (document.querySelector('.mat-toolbar').scrollHeight * 5);
        if (scroll.sT >= fundacionElement) {
          this.staggerStateFundacion = 'active';
        }

        let innovaElement: any = this.innova.nativeElement.offsetTop - (document.querySelector('.mat-toolbar').scrollHeight * 5);
        if (scroll.sT >= innovaElement) {
          this.staggerStateInnovagain = 'active';
        }
      });
  }

}
