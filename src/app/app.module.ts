import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import 'hammerjs';

import { AppComponent } from './app.component';
import { MaterialComponentsModule } from './_app-modules/material-components.module';
import { NavbarComponent } from './_components/navbar/navbar.component';
import { RoutingModule } from './_app-modules/routing.module';
import { UvfService } from './_services/uvf.service';
import { HttpClientModule } from '../../node_modules/@angular/common/http';
import { AlgebraixDialogComponent } from './_components/_dialogs/algebraix-dialog/algebraix-dialog.component';
import { RouteGuardService } from './_services/route-guard.service';
import { NewsListComponent } from './_components/_news/news-list/news-list.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AlgebraixDialogComponent,
    NewsListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialComponentsModule,
    RoutingModule,
    HttpClientModule,
  ],
  providers: [
    UvfService,
    RouteGuardService
  ],
  entryComponents: [
    AlgebraixDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
