import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { UvfService } from '../../../_services/uvf.service';


@Component({
  selector: 'app-oferta-headers',
  templateUrl: './oferta-headers.component.html',
  styleUrls: ['./oferta-headers.component.css']
})
export class OfertaHeadersComponent implements OnInit, OnDestroy {

  @ViewChild('smooth') smooth: ElementRef;

  constructor(public _uvfService: UvfService) { }

  ngOnInit() {
    this._uvfService.setOEInkBarActive(true);
  }

  ngOnDestroy() {
    this._uvfService.setOEInkBarActive(false);
  }

  onPrograma() {
    this.smooth.nativeElement.scrollIntoView({ block: "start", behavior: "smooth" });
  }

}
