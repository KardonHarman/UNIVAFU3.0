import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { UvfService } from '../../../_services/uvf.service';
import { Subscription, fromEvent } from '../../../../../node_modules/rxjs';
import { map } from '../../../../../node_modules/rxjs/operators';
import { leftAnimation, rightAnimation } from '../../../_animations/animations';

@Component({
  selector: 'app-programas',
  templateUrl: './programas.component.html',
  styleUrls: ['./programas.component.css'],
  animations: [leftAnimation, rightAnimation]
})
export class ProgramasComponent implements OnInit, OnDestroy {

  scrollSub: Subscription;
  secc1State: string;
  secc2State: string;
  secc3State: string;

  @ViewChild('secc1') secc1: ElementRef;
  @ViewChild('secc2') secc2: ElementRef;
  @ViewChild('secc3') secc3: ElementRef;

  constructor(public _uvfService: UvfService) { }

  ngOnInit() {
    this.setScrollEvent();
    
    this.secc1State = 'hide';
    this.secc2State = 'hide';
    this.secc3State = 'hide';
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

        let secc1Element: any = this.secc1.nativeElement.offsetTop - (document.querySelector('.mat-toolbar').scrollHeight * 5);
        if (scroll.sT >= secc1Element) {
          this.secc1State = 'show';
        }

        let secc2Element: any = this.secc2.nativeElement.offsetTop - (document.querySelector('.mat-toolbar').scrollHeight * 5);
        if (scroll.sT >= secc2Element) {
          this.secc2State = 'show';
        }

        let secc3Element: any = this.secc3.nativeElement.offsetTop - (document.querySelector('.mat-toolbar').scrollHeight * 5);
        if (scroll.sT >= secc3Element) {
          this.secc3State = 'show';
        }

      });
  }

}
