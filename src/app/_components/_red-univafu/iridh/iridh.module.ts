import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IridhRoutingModule } from './iridh-routing.module';
import { MaterialComponentsModule } from '../../../_app-modules/material-components.module';
import { IridhComponent } from './iridh.component';

@NgModule({
  imports: [
    CommonModule,
    IridhRoutingModule,
    MaterialComponentsModule
  ],
  declarations: [
    IridhComponent
  ]
})
export class IridhModule { }
