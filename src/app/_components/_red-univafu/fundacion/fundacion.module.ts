import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FundacionRoutingModule } from './fundacion-routing.module';
import { FundacionComponent } from './fundacion.component';
import { MaterialComponentsModule } from '../../../_app-modules/material-components.module';

@NgModule({
  imports: [
    CommonModule,
    FundacionRoutingModule,
    MaterialComponentsModule
  ],
  declarations: [
    FundacionComponent
  ]
})
export class FundacionModule { }
