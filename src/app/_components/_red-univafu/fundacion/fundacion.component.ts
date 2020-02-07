import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { UvfService } from '../../../_services/uvf.service';
import { barAnimation } from '../../../_animations/animations';
import { Subscription, fromEvent } from '../../../../../node_modules/rxjs';
import { map } from '../../../../../node_modules/rxjs/operators';

@Component({
  selector: 'app-fundacion',
  templateUrl: './fundacion.component.html',
  styleUrls: ['./fundacion.component.css'],
  animations: [barAnimation]
})
export class FundacionComponent implements OnInit, OnDestroy {

  animationState1: string = "hide";
  animationState2: string = "hide";
  scrollSub: Subscription;
  @ViewChild('animation1') animation1: ElementRef;
  @ViewChild('animation2') animation2: ElementRef;

  constructor(public _uvfService: UvfService) { }

  ngOnInit() {
    this._uvfService.setRUInkBarActive(true);
    this.setScrollEvent();
  }

  ngOnDestroy() {
    this._uvfService.setRUInkBarActive(false);
    this.scrollSub.unsubscribe();
  }

  setScrollEvent() {
    this.scrollSub = fromEvent(window, 'scroll')
      .pipe(
        map((event: any) => ({
          sT: event.target.scrollingElement.scrollTop
        }))
      ).subscribe((scroll: any) => {

        let element1: any = this.animation1.nativeElement.offsetTop - (document.querySelector('.mat-toolbar').scrollHeight * 5);
        if (scroll.sT >= element1) {
          this.animationState1 = 'show';
        }

        let element2: any = this.animation2.nativeElement.offsetTop - (document.querySelector('.mat-toolbar').scrollHeight * 5);
        if (scroll.sT >= element2) {
          this.animationState2 = 'show';
        }

      });
  }

}
