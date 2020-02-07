import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InnovagainRoutingModule } from './innovagain-routing.module';
import { MaterialComponentsModule } from '../../../_app-modules/material-components.module';
import { InnovagainComponent } from './innovagain.component';

@NgModule({
  imports: [
    CommonModule,
    InnovagainRoutingModule,
    MaterialComponentsModule
  ],
  declarations: [
    InnovagainComponent
  ]
})
export class InnovagainModule { }
