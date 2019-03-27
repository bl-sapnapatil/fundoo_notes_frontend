import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Registeruser } from '../model/registermodel';
import { Loginuser } from '../model/loginmodel';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  public  apiBaseurl = environment.apiBaseurl;
  url: string;
  constructor(private http: HttpClient) { } //dependency injection is passed as a argument inside constructor.
  
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

  postUser(user, url:string) {
    console.log(url);
    console.log("user data at service: ",user);
    
    var httpOptions = {
      headers: new HttpHeaders // create header object
        ({
          'Content-Type': 'application/json'
        }),
    };
    // set header in your http request
    return this.http.post(this.apiBaseurl + url,user);
  }

 

  resetpassword(data, purpose: string) {
    let headers = new HttpHeaders({
      'content-Type': 'application/json', //shows the type of content
      'token': localStorage.getItem('generatedToken') //grabbing the token from localstorage

    });
    // set header in your http request
    return this.http.post(this.apiBaseurl + purpose, data, { headers: headers })

  }

  isAuthenticated(){
    return !!localStorage.getItem('token');
  }


}

