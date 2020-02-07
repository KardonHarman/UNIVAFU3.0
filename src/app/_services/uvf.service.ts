import { Injectable } from '@angular/core';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { MatSidenav, MatToolbar } from '../../../node_modules/@angular/material';
import { MediaMatcher } from '../../../node_modules/@angular/cdk/layout';
import { Observable } from '../../../node_modules/rxjs';


@Injectable({
  providedIn: 'root'
})
export class UvfService {

  public noticiasData: any;
  public sidenav: MatSidenav;
  public toolbar: MatToolbar;
  public OEInkBarActive: boolean = false;
  public RUInkBarActive: boolean = false;
  mobileQuery: MediaQueryList;
  public headers: any;
  public links: any;
  public licenciaturasData: any;
  public posgradosData: any;
  public programasData: any;

  constructor(public _http: HttpClient, _media: MediaMatcher) {
    this.mobileQuery = _media.matchMedia('(min-width: 900px)');
  }

  loadNoticiasData() {
    return this._http.get('assets/data/noticias.json', { observe: 'response' });
  }

  public setNavside(sidenav: MatSidenav) {
    this.sidenav = sidenav;
  }

  public setToolbar(toolbar: MatToolbar) {
    this.toolbar = toolbar;
  }
  
  setOEInkBarActive(state: boolean) {
    this.OEInkBarActive = state;
  }

  setRUInkBarActive(state: boolean) {
    this.RUInkBarActive = state;
  }

  setHeaders(headers: any, links: any) {
    this.headers = headers;
    this.links = links;
  }

  getLicenciaturasData(): Observable<any> {
    return this._http.get('assets/data/licenciaturas.json', { observe: 'response' });
  }

  setLicenciaturasData(data: any) {
    this.licenciaturasData = data;
  }

  getPosgradosData(): Observable<any> {
    return this._http.get('assets/data/posgrados.json', { observe: 'response' });
  }

  setPosgradosData(data: any) {
    this.posgradosData = data;
  }

  setProgramasData(data: any) {
    this.programasData = data;
  }

}
