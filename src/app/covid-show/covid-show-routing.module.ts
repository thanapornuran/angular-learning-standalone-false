import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CovidShowComponent } from './covid-show/covid-show.component';

const routes: Routes = [{
  path: "covidReport", component: CovidShowComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CovidShowRoutingModule { }
