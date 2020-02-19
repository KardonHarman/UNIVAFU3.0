import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialComponentsModule } from '../../../_app-modules/material-components.module';
import { NewsDetailComponent } from './news-detail.component';
import { NewsDetailRoutingModule } from './news-detail-routing.module';

@NgModule({
  imports: [
    CommonModule,
    NewsDetailRoutingModule,
    MaterialComponentsModule,
  ],
  declarations: [
    NewsDetailComponent,
  ]
})
export class NewsDetailModule { }
