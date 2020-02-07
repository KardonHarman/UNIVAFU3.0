import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AvisoLegalRoutingModule } from './aviso-legal-routing.module';
import { AvisoLegalComponent } from './aviso-legal.component';
import { MaterialComponentsModule } from '../../_app-modules/material-components.module';

@NgModule({
  imports: [
    CommonModule,
    AvisoLegalRoutingModule,
    MaterialComponentsModule
  ],
  declarations: [
    AvisoLegalComponent
  ]
})
export class AvisoLegalModule { }
