import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Registeruser } from '../model/registermodel';
import { Loginuser } from '../model/loginmodel';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  url: string;
  constructor(private http: HttpClient) { } //dependency injection is passed as a argument inside constructor.
  
  apiBaseurl:'http://localhost:3000'
  selectedUser: Registeruser = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  };

  User: Loginuser = {
    email: '',
    password: ''
  };

  postUser(user, url) {

    var httpOptions = {
      headers: new HttpHeaders // create header object
        ({
          'Content-Type': 'application/json'
        }),
    };
    // set header in your http request
    return this.http.post('http://localhost:3000' + url, user, httpOptions);
  }

  resetpassword(data, purpose: string) {
    let headers = new HttpHeaders({
      'content-Type': 'application/json', //shows the type of content
      'token': localStorage.getItem('generatedToken') //grabbing the token from localstorage

    });
    // set header in your http request
    return this.http.post('http://localhost:3000' + purpose, data, { headers: headers })


  }
}

