import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
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

      });
  }

}
