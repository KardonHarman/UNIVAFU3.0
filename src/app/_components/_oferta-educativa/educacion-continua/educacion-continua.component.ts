import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { UvfService } from '../../../_services/uvf.service';
import { barAnimation } from '../../../_animations/animations';
import { Subscription, fromEvent } from '../../../../../node_modules/rxjs';
import { map } from '../../../../../node_modules/rxjs/operators';

@Component({
  selector: 'app-educacion-continua',
  templateUrl: './educacion-continua.component.html',
  styleUrls: ['./educacion-continua.component.css'],
  animations: [barAnimation]
})
export class EducacionContinuaComponent implements OnInit, OnDestroy {

  animationState: string = "hide";
  scrollSub: Subscription;
  @ViewChild('animation') animation: ElementRef;

  constructor(public _uvfService: UvfService) { }

  ngOnInit() {
    this._uvfService.setOEInkBarActive(true);
    this.setScrollEvent();
  }

  ngOnDestroy() {
    this._uvfService.setOEInkBarActive(false);
    this.scrollSub.unsubscribe();
  }

  setScrollEvent() {
    this.scrollSub = fromEvent(window, 'scroll')
      .pipe(
        map((event: any) => ({
          sT: event.target.scrollingElement.scrollTop
        }))
      ).subscribe((scroll: any) => {

        let element: any = this.animation.nativeElement.offsetTop - (document.querySelector('.mat-toolbar').scrollHeight * 5);
        if (scroll.sT >= element) {
          this.animationState = 'show';
        }

      });
  }

}
