import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PosgradosRoutingModule } from './posgrados-routing.module';
import { MaterialComponentsModule } from '../../../_app-modules/material-components.module';

@NgModule({
  imports: [
    CommonModule,
    PosgradosRoutingModule,
    MaterialComponentsModule
  ],
  declarations: []
})
export class PosgradosModule { }
