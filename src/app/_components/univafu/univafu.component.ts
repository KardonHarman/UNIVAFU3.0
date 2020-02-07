import { Component, OnInit, OnDestroy, ElementRef, ViewChild } from '@angular/core';
import { UvfService } from '../../_services/uvf.service';
import { barAnimation } from '../../_animations/animations';
import { Subscription, fromEvent } from '../../../../node_modules/rxjs';
import { map } from '../../../../node_modules/rxjs/operators';

@Component({
  selector: 'app-conocenos',
  templateUrl: './univafu.component.html',
  styleUrls: ['./univafu.component.css'],
  animations: [barAnimation]
})
export class UnivafuComponent implements OnInit, OnDestroy {

  animationState: string = "hide";
  scrollSub: Subscription;
  public staggerStatesala: string = "inactive";
  public staggerStatelab: string = "inactive";
  public staggerStateInnovagain: string = "inactive";
  public staggerStateIridh: string = "inactive";
  @ViewChild('sala') public sala: ElementRef;
  @ViewChild('lab') public lab: ElementRef;
  @ViewChild('innova') public innova: ElementRef;
  @ViewChild('iridh') public iridh: ElementRef;
  @ViewChild('mvp') mvp: ElementRef;

  constructor(public _uvfService: UvfService) { }

  ngOnInit() {

    this.setScrollEvent();

  }

  ngOnDestroy() {
    this.scrollSub.unsubscribe();
  }

  setScrollEvent() {
    this.scrollSub = fromEvent(window, 'scroll')
      .pipe(
        map((event: any) => ({
          sT: event.target.scrollingElement.scrollTop
        }))
      ).subscribe((scroll: any) => {

        let mvpElement: any = this.mvp.nativeElement.offsetTop - (document.querySelector('.mat-toolbar').scrollHeight * 5);
        if (scroll.sT >= mvpElement) {
          this.animationState = 'show';
        }

        let salaElement: any = this.sala.nativeElement.offsetTop - (document.querySelector('.mat-toolbar').scrollHeight * 5);
        if (scroll.sT >= salaElement) {
          this.staggerStatesala = 'active';
        }

        let labElement: any = this.lab.nativeElement.offsetTop - (document.querySelector('.mat-toolbar').scrollHeight * 5);
        if (scroll.sT >= labElement) {
          this.staggerStatelab = 'active';
        }

      });
  }

}
