import {
  NgModule
} from '@angular/core';
import {
  BrowserModule,
  provideClientHydration
} from '@angular/platform-browser';

import {
  AppRoutingModule
} from './app-routing.module';
import {
  AppComponent
} from './app.component';
import {
  CovidModule
} from './covid/covid.module';
import {
  NgbModule
} from '@ng-bootstrap/ng-bootstrap';


import {
  HttpClientModule
} from '@angular/common/http';
import {
  CovidShowModule
} from './covid-show/covid-show.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CovidModule,
    CovidShowModule,
    NgbModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {

  }
}
