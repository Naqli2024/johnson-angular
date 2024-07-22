import { Injectable } from '@angular/core';
import { addDriver, selectedDriver } from '../model/addDriver';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddDriverService {

  constructor(private http: HttpClient) { }

    loadDriver() {
      return this.http.get<[addDriver]>(
        'http://localhost:3000/addDriver'
      );
    }

    selectedDriver() {
      return this.http.get<[selectedDriver]>(
        'http://localhost:3000/selectedDriver'
      )
    }
}


