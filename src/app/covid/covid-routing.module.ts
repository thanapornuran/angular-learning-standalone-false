import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CovidHomeComponent } from './covid-home/covid-home.component';

const routes: Routes = [{
  path: "covid", component: CovidHomeComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CovidRoutingModule { }
