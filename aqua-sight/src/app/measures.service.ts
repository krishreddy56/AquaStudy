import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MeasuresService {
  uri = 'http://localhost:4000/api';

  constructor(private http: HttpClient) { }
  getMeasures() {
    return this.http.get(this.uri + '/details');
  }
  addMeasure(TimeStamp, Flow, Pressure) {
    const measure = {
      TimeStamp: TimeStamp,
      Flow: Flow,
      Pressure: Pressure
    };
    return this.http.post(this.uri + '/details/add', measure);
  }
}
