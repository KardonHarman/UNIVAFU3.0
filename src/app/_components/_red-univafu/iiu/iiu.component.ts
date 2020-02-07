import { Component, OnInit, OnDestroy, ElementRef, ViewChild } from '@angular/core';
import { UvfService } from '../../../_services/uvf.service';
import { barAnimation, staggerAnim } from '../../../_animations/animations';
import { Subscription, fromEvent } from '../../../../../node_modules/rxjs';
import { map } from '../../../../../node_modules/rxjs/operators';

@Component({
  selector: 'app-iiu',
  templateUrl: './iiu.component.html',
  styleUrls: ['./iiu.component.css'],
  animations: [barAnimation, staggerAnim]
})
export class IiuComponent implements OnInit, OnDestroy {

  animationState: string = "hide";
  staggerState: string = "inactive";
  scrollSub: Subscription;
  @ViewChild('animation') animation: ElementRef;
  @ViewChild('staggerElement') staggerElement: ElementRef;

  constructor(public _uvfService: UvfService) { }

  ngOnInit() {
    this._uvfService.setRUInkBarActive(true);
    this.setScrollEvent();
  }

  ngOnDestroy() {
    this._uvfService.setRUInkBarActive(false);
    this.scrollSub.unsubscribe()
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

        let staggerEl: any = this.staggerElement.nativeElement.offsetTop - (document.querySelector('.mat-toolbar').scrollHeight * 6);
        if (scroll.sT >= staggerEl) {
          this.staggerState = 'active';
        }

      });
  }

}
