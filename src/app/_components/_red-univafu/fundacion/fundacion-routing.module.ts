import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FundacionComponent } from './fundacion.component';

const routes: Routes = [
  { path: "", component: FundacionComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FundacionRoutingModule { }
