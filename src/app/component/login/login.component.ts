import { Component, OnInit } from '@angular/core';
import { NgForm, Validators, FormControl } from '@angular/forms';
import { HttpService } from 'src/app/service/http.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {


  constructor(private httpService: HttpService, private snackBar: MatSnackBar) { }

  ngOnInit() {
  }
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);

  getEmailErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' : '';

  }
  getpasswordErrorMessage() {
    return this.password.hasError('required') ? 'You must enter a value' : '';

  }
  login() {
    var reqbody = {
      email: this.email.value,
      password: this.password.value
    }
    this.httpService.postUser(reqbody, '/login').subscribe(
      res => {
        console.log(res);
        this.snackBar.open("you are logged in!!", "ok", { duration: 5000 });
      },
      err => {
        console.log("error: ", err)
        this.snackBar.open("you have entered wrong credentials", "ok", {
          duration: 500,
        });

      });

  }

  // openSnackBar() {
  //   this.snackBar.open("you are logged in!!", "ok", {
  //     duration: 500,
  //   });
  // }
  //  openSnackBar2() {
  //   this.snackBar.open("you have entered wrong credentials", "ok" ,{
  //     duration: 500,
  //   });
  // }



}
