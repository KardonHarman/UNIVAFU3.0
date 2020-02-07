import { Injectable } from '@angular/core';
import { CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, Router } from '../../../node_modules/@angular/router';
import { Observable } from '../../../node_modules/rxjs';
import { UvfService } from './uvf.service';
import { take, map } from '../../../node_modules/rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate, CanActivateChild {

  constructor(private _uvfService: UvfService, private _router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    return this.getData(state.url);
  }


  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    return this.getProgramaData(state.url);
  }

  getData(url: string) {
    if (url.split("/")[2] == 'licenciaturas') {
      if (!this._uvfService.licenciaturasData) {
        this._uvfService.getLicenciaturasData().pipe(
          take(1),
          map((data: any) => {
            return data.body;
          })
        ).subscribe((data) => {
          this._uvfService.setLicenciaturasData(data);
          this._uvfService.setHeaders(data.headers, data.links);
        });
      } else {
        this._uvfService.setHeaders(this._uvfService.licenciaturasData.headers, this._uvfService.licenciaturasData.links);
      }
    } else {
      if (!this._uvfService.posgradosData) {
        this._uvfService.getPosgradosData().pipe(
          take(1),
          map((data: any) => {
            return data.body;
          })
        ).subscribe((data: any) => {
          this._uvfService.setPosgradosData(data);
          this._uvfService.setHeaders(data.headers, data.links);
        });
      } else {
        this._uvfService.setHeaders(this._uvfService.posgradosData.headers, this._uvfService.posgradosData.links);
      }
    }

    return true;
  }

  getProgramaData(url: string) {
    if (url.split("/")[2] == 'licenciaturas') {

      if (!this._uvfService.licenciaturasData) {
        this._router.navigate(['/oferta-educativa/licenciaturas']);
        return false;
      }

      this.setProgramaDataLic(url);

      return true;
    } else {
      if (!this._uvfService.posgradosData) {
        this._router.navigate(['/oferta-educativa/posgrados']);
        return false;
      }

      this.setProgramaDataPos(url);

      return true;
    }

  }

  setProgramaDataLic(url: string) {
    switch (url.split("/")[3]) {
      case "lcfd": {
        this._uvfService.setProgramasData(this._uvfService.licenciaturasData.lcfd);
        break;
      }
      case "lgtyg": {
        this._uvfService.setProgramasData(this._uvfService.licenciaturasData.lgtyg);
        break;
      }
      case "isdi": {
        this._uvfService.setProgramasData(this._uvfService.licenciaturasData.isdi);
        break;
      }
      case "lnut": {
        this._uvfService.setProgramasData(this._uvfService.licenciaturasData.lnut);
        break;
      }
      case "ltal": {
        this._uvfService.setProgramasData(this._uvfService.licenciaturasData.ltal);
        break;
      }
      case "ltfyr": {
        this._uvfService.setProgramasData(this._uvfService.licenciaturasData.ltfyr);
        break;
      }
      case "lgas": {
        this._uvfService.setProgramasData(this._uvfService.licenciaturasData.lgas);
        break;
      }
      case "ldvm": {
        this._uvfService.setProgramasData(this._uvfService.licenciaturasData.ldvm);
        break;
      }
      case "isc": {
        this._uvfService.setProgramasData(this._uvfService.licenciaturasData.isc);
        break;
      }
      case "lmkt": {
        this._uvfService.setProgramasData(this._uvfService.licenciaturasData.lmkt);
        break;
      }
    }
  }

  setProgramaDataPos(url: string) {
    switch (url.split("/")[3]) {
      case "mmed": {
        this._uvfService.setProgramasData(this._uvfService.posgradosData.mmed);
        break;
      }
      case "medu": {
        this._uvfService.setProgramasData(this._uvfService.posgradosData.medu);
        break;
      }
    }
  }

}
