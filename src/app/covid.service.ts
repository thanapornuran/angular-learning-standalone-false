import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CovidService {
  constructor(private http: HttpClient) { 
  }

  public getCovidData() {
    return this.http.get("https://covid19.ddc.moph.go.th/api/Cases/today-cases-all");
  }
}
