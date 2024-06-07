import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { CovidShowRoutingModule } from './covid-show-routing.module';
import { CovidShowComponent } from './covid-show/covid-show.component';

@NgModule({
  declarations: [
    CovidShowComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    CovidShowRoutingModule,
  ],
  exports: [
    CovidShowComponent
  ]
})
export class CovidShowModule { }
