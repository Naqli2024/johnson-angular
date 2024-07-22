import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loginURL = "http://localhost:3000/api/login"

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  login(bodyData: any) {
    return this.http.post<any>(this.loginURL, bodyData, this.httpOptions);
  }

  getToken() {
    return localStorage.getItem('token')
  }
}
