import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InnovagainComponent } from './innovagain.component';

const routes: Routes = [
  { path: '', component: InnovagainComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InnovagainRoutingModule { }
