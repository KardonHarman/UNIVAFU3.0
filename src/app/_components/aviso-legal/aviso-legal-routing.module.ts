import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AvisoLegalComponent } from './aviso-legal.component';

const routes: Routes = [
  { path: '', component: AvisoLegalComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AvisoLegalRoutingModule { }
