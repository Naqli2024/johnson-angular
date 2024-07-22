import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { addtruck } from '../model/trucksData';

@Injectable({
  providedIn: 'root'
})
export class TrucksService {

  constructor(private http: HttpClient) { }

  loadAddTruckData() {
    return this.http.get<[addtruck]>(
      'http://localhost:3000/addtruck'
    );
  }
}
