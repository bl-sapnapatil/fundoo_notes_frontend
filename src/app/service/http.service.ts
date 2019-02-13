import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Registeruser } from '../model/registermodel';
import { Loginuser } from '../model/loginmodel';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  url: string;
  constructor(private http: HttpClient) { }

  apiBaseUrl: 'http://localhost:3000'
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
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
    };
    console.log(user);
    return this.http.post('http://localhost:3000' + url, user, httpOptions);
  }

  resetpassword(data,purpose: string){
    let headers = new HttpHeaders({
      'content-Type': 'application/json',
      'token': localStorage.getItem('generatedToken')

    });
    return this.http.post('http://localhost:3000'+purpose,data,{headers: headers})


  }
}

