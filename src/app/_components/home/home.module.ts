import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { MaterialComponentsModule } from '../../_app-modules/material-components.module';
import { NoticiasDialogComponent } from '../_dialogs/noticias-dialog/noticias-dialog.component';
import { CarouselDirective } from '../../_directives/carousel.directive';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialComponentsModule
  ],
  declarations: [
    HomeComponent,
    NoticiasDialogComponent,
    CarouselDirective
  ],
  entryComponents: [
    NoticiasDialogComponent
  ]
})
export class HomeModule { }
