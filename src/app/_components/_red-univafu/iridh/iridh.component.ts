import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { UvfService } from '../../../_services/uvf.service';
import { Subscription, fromEvent } from '../../../../../node_modules/rxjs';
import { map } from '../../../../../node_modules/rxjs/operators';
import { barAnimation } from '../../../_animations/animations';

@Component({
  selector: 'app-iridh',
  templateUrl: './iridh.component.html',
  styleUrls: ['./iridh.component.css'],
  animations: [barAnimation]
})
export class IridhComponent implements OnInit {

  animationState: string = "hide";
  scrollSub: Subscription;
  @ViewChild('animation') animation: ElementRef;

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

        let element: any = this.animation.nativeElement.offsetTop - (document.querySelector('.mat-toolbar').scrollHeight * 5);
        if (scroll.sT >= element) {
          this.animationState = 'show';
        }

      });
  }

}
