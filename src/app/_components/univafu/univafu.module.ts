import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UnivafuRoutingModule } from './univafu-routing.module';
import { UnivafuComponent } from './univafu.component';
import { MaterialComponentsModule } from '../../_app-modules/material-components.module';

@NgModule({
  imports: [
    CommonModule,
    UnivafuRoutingModule,
    MaterialComponentsModule
  ],
  declarations: [
    UnivafuComponent
  ]
})
export class UnivafuModule { }
