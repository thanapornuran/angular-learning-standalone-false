import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CovidRoutingModule } from './covid-routing.module';
import { CovidHomeComponent } from './covid-home/covid-home.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    CovidHomeComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    CovidRoutingModule
  ],
  exports: [
    CovidHomeComponent
  ]
})
export class CovidModule { 
  
}
