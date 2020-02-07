import { Component, ViewChild, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { MatSidenav, MatDialog } from '../../node_modules/@angular/material';
import { UvfService } from './_services/uvf.service';
import { AlgebraixDialogComponent } from './_components/_dialogs/algebraix-dialog/algebraix-dialog.component';
import { Subscription } from '../../node_modules/rxjs';
import { Router, NavigationEnd, NavigationStart } from '../../node_modules/@angular/router';
import { filter } from '../../node_modules/rxjs/operators';
import { routeAnimation } from './_animations/animations';

@Component({
  selector: 'app-univafu',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [routeAnimation]
})

export class AppComponent implements OnInit, OnDestroy {

  @ViewChild('sidenav') public sidenav: MatSidenav;
  mobileLinks: Array<
    {
      label: string,
      url: string,
      expandIconId: string,
      lvl2id: string,
      lvl2: any
    }>;

  _mobileQueryListener: () => void;
  routeSub: Subscription;
  navStartSub: Subscription;
  checkFlag: boolean = false;
  progressBar: boolean = false;

  constructor(
    public _uvfService: UvfService,
    private dialog: MatDialog,
    _changeDetectorRef: ChangeDetectorRef,
    private router: Router
  ) {

    this.mobileLinks = [
      { label: 'Inicio', url: "", expandIconId: null, lvl2id: null, lvl2: null },
      { label: 'UNIVAFU', url: "/univafu", expandIconId: null, lvl2id: null, lvl2: null },
      {
        label: 'Oferta Educativa', url: null, expandIconId: "ex1", lvl2id: "id1", lvl2: [
          { url: "oferta-educativa/licenciaturas", label: "Licenciaturas" },
          { url: "oferta-educativa/posgrados", label: "Posgrados" },
          { url: "oferta-educativa/educacion-continua", label: "Educación Continua" },
          { url: "https://c1-univafu.algebraix.com/bin/g/enrollments/default/", label: "Inscripciones en línea", website: true }
        ]
      },
      {
        label: 'Red UNIVAFU', url: null, expandIconId: "ex2", lvl2id: "id2", lvl2: [
          { url: "red-univafu/iiu", label: "IIU" },
          { url: "red-univafu/fundacion", label: "Fundación" },
          { url: "red-univafu/iridh", label: "IRIDH" },
          { url: "red-univafu/innovagain", label: "Innovagain" },
          { url: "", label: "Algebraix", clickeable: true },
        ]
      },
      { label: 'Contacto', url: "contacto", expandIconId: null, lvl2id: null, lvl2: null },
      { label: 'Aviso de privacidad', url: "/aviso-legal", expandIconId: null, lvl2id: null, lvl2: null },
    ];

    this._mobileQueryListener = () => _changeDetectorRef.detectChanges();
    this._uvfService.mobileQuery.addListener(this._mobileQueryListener);

  }

  ngOnInit() {
    this.setRouterEvents();
    this._uvfService.setNavside(this.sidenav);

    this._uvfService.mobileQuery.addListener((wea: any) => {
      if (this.sidenav.opened) {
        this.sidenav.close();
      }
    });
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
    this.navStartSub.unsubscribe();
    this._uvfService.mobileQuery.removeListener(this._mobileQueryListener);
  }

  setRouterEvents() {
    this.navStartSub = this.router.events.pipe(
      filter(event => event instanceof NavigationStart)
    ).subscribe(() => {
      this.progressBar = true;
    });

    this.routeSub = this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      let url: any = event.url.split('/');

      if (url[1] == "oferta-educativa") {
        if (url.length == 3) {
          window.scrollTo(0, 0);
        }
      } else {
        window.scrollTo(0, 0);
      }

      this.checkMenu();
      this.progressBar = false;
    });
  }

  onLvl2Click(id, expandId) {
    if (!id) {
      return;
    }

    let divLvl2 = document.getElementById(id) as HTMLElement;

    if (divLvl2.style.maxHeight) {
      divLvl2.style.maxHeight = null;
    } else {
      divLvl2.style.maxHeight = divLvl2.scrollHeight + 'px';
    }

    document.getElementById(expandId).classList.toggle('lvl2-icon-active');
  }

  checkMenu() {
    if (this.checkFlag) return;

    setTimeout(() => {
      let sublvlArray: any = document.querySelectorAll('.wrapper-lvl2');

      for (let lvl of sublvlArray) {
        if (lvl.querySelector('.active')) {
          lvl.style.maxHeight = lvl.scrollHeight + 'px';
          lvl.parentElement.querySelector('.lvl2-icon').classList.toggle('lvl2-icon-active');
        }
      }
    });

    this.checkFlag = true;
  }

  onAlgebraix() {
    this.sidenav.close().then(() => {
      this.dialog.open(AlgebraixDialogComponent);
    });
  }

  getDepth(outlet) {
    return outlet.activatedRouteData['depth'];
  }

}
