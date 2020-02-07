import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProgramasRoutingModule } from './programas-routing.module';
import { ProgramasComponent } from './programas.component';
import { MaterialComponentsModule } from '../../../_app-modules/material-components.module';

@NgModule({
  imports: [
    CommonModule,
    ProgramasRoutingModule,
    MaterialComponentsModule
  ],
  declarations: [
    ProgramasComponent
  ]
})
export class ProgramasModule { }
