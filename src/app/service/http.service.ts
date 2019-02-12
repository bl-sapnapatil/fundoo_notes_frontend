import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Registeruser } from '../model/registermodel';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private http: HttpClient) { }

  apiBaseUrl: 'http://localhost:3000'
  selectedUser: Registeruser = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  };

  postUser(user, url) {
    console.log(url);
    
    var httpOptions = {
      headers: new HttpHeaders({
          'Content-Type': 'application/json'
      }),
  };
    console.log(user);
    return this.http.post('http://localhost:3000' + url, user, httpOptions);
  }
}
