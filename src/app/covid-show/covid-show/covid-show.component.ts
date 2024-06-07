import { Component } from '@angular/core';
import { CovidService } from '../../covid.service';

@Component({
  selector: 'app-covid-show',
  templateUrl: './covid-show.component.html',
  styleUrl: './covid-show.component.css'
})
export class CovidShowComponent {
  data: any;

  covidData: any;

  constructor(private covid: CovidService) {
    this.covid.getCovidData().subscribe(response => {
      this.data = response;
    })
  }

  showData() {
    console.log(this.data);
  }
}
