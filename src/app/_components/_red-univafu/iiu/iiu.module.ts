import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IiuRoutingModule } from './iiu-routing.module';
import { MaterialComponentsModule } from '../../../_app-modules/material-components.module';
import { IiuComponent } from './iiu.component';

@NgModule({
  imports: [
    CommonModule,
    IiuRoutingModule,
    MaterialComponentsModule
  ],
  declarations: [
    IiuComponent
  ]
})
export class IiuModule { }
