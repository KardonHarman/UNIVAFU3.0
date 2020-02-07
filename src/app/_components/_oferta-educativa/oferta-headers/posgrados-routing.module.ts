import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OfertaHeadersComponent } from './oferta-headers.component';
import { RouteGuardService } from '../../../_services/route-guard.service';

const routes: Routes = [
  {
    path: '', component: OfertaHeadersComponent, canActivate: [RouteGuardService], canActivateChild: [RouteGuardService], children: [
      { path: 'mmed', loadChildren: 'src/app/_components/_oferta-educativa/programas/programas.module#ProgramasModule' },
      { path: 'medu', loadChildren: 'src/app/_components/_oferta-educativa/programas/programas.module#ProgramasModule' },
      // { path: '', redirectTo: "lcfd", pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PosgradosRoutingModule { }
