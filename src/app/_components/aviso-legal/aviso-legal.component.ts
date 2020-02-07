import { Component, OnInit, Renderer2, OnDestroy } from '@angular/core';
import { UvfService } from '../../_services/uvf.service';

@Component({
  selector: 'app-aviso-legal',
  templateUrl: './aviso-legal.component.html',
  styleUrls: ['./aviso-legal.component.css']
})
export class AvisoLegalComponent implements OnInit, OnDestroy {

  inkBar: any;

  constructor(private _uvfService: UvfService, private render: Renderer2) { }

  ngOnInit() {
    this.render.addClass(this._uvfService.toolbar._elementRef.nativeElement, 'aviso-style');

    if (window.innerWidth >= 900) {
      this.inkBar = document.getElementsByClassName('mat-ink-bar') as HTMLCollection;
      setTimeout(() => {
        this.inkBar[0].style.backgroundColor = '#000';
      });
    }


  }

  ngOnDestroy() {
    if (window.innerWidth >= 900) {
      this.inkBar = document.getElementsByClassName('mat-ink-bar') as HTMLCollection;
      this.inkBar[0].style.backgroundColor = '#d98a1b';
    }


    this.render.removeClass(this._uvfService.toolbar._elementRef.nativeElement, 'aviso-style');
  }

}
