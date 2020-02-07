import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IiuComponent } from './iiu.component';

const routes: Routes = [
  { path: '', component: IiuComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IiuRoutingModule { }
