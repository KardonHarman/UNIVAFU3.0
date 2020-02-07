import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EducacionContinuaRoutingModule } from './educacion-continua-routing.module';
import { MaterialComponentsModule } from '../../../_app-modules/material-components.module';
import { EducacionContinuaComponent } from './educacion-continua.component';

@NgModule({
  imports: [
    CommonModule,
    EducacionContinuaRoutingModule,
    MaterialComponentsModule
  ],
  declarations: [
    EducacionContinuaComponent
  ]
})
export class EducacionContinuaModule { }
