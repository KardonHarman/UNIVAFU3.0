import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OfertaHeadersComponent } from './oferta-headers.component';
import { RouteGuardService } from '../../../_services/route-guard.service';

const routes: Routes = [
  {
    path: '', component: OfertaHeadersComponent, canActivate: [RouteGuardService], canActivateChild: [RouteGuardService], children: [
      { path: 'lcfd', loadChildren: 'src/app/_components/_oferta-educativa/programas/programas.module#ProgramasModule' },
      { path: 'lgtyg', loadChildren: 'src/app/_components/_oferta-educativa/programas/programas.module#ProgramasModule' },
      { path: 'isdi', loadChildren: 'src/app/_components/_oferta-educativa/programas/programas.module#ProgramasModule' },
      { path: 'lnut', loadChildren: 'src/app/_components/_oferta-educativa/programas/programas.module#ProgramasModule' },
      { path: 'ltal', loadChildren: 'src/app/_components/_oferta-educativa/programas/programas.module#ProgramasModule' },
      { path: 'ltfyr', loadChildren: 'src/app/_components/_oferta-educativa/programas/programas.module#ProgramasModule' },
      { path: 'lgas', loadChildren: 'src/app/_components/_oferta-educativa/programas/programas.module#ProgramasModule' },
      { path: 'ldvm', loadChildren: 'src/app/_components/_oferta-educativa/programas/programas.module#ProgramasModule' },
      { path: 'isc', loadChildren: 'src/app/_components/_oferta-educativa/programas/programas.module#ProgramasModule' },
      { path: 'lmkt', loadChildren: 'src/app/_components/_oferta-educativa/programas/programas.module#ProgramasModule' },
      // { path: '', redirectTo: "lcfd", pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OfertaHeadersRoutingModule { }
