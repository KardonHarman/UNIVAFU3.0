import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IridhComponent } from './iridh.component';

const routes: Routes = [
  { path: '', component: IridhComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IridhRoutingModule { }
