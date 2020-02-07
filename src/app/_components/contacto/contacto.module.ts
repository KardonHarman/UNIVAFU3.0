import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactoRoutingModule } from './contacto-routing.module';
import { ContactoComponent } from './contacto.component';
import { MaterialComponentsModule } from '../../_app-modules/material-components.module';

@NgModule({
  imports: [
    CommonModule,
    ContactoRoutingModule,
    MaterialComponentsModule
  ],
  declarations: [
    ContactoComponent
  ]
})
export class ContactoModule { }
