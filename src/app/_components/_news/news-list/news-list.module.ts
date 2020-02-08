import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialComponentsModule } from '../../../_app-modules/material-components.module';
import { NewsListRoutingModule } from './news-list-routing.module';
import { NewsListComponent } from './news-list.component';

@NgModule({
  imports: [
    CommonModule,
    NewsListRoutingModule,
    MaterialComponentsModule
  ],
  declarations: [
    NewsListComponent,
  ]
})
export class NewsListModule { }
