import { Component, OnInit } from '@angular/core';
import { NgForm, Validators, FormControl } from '@angular/forms';
import { HttpService } from 'src/app/service/http.service';
import { MatSnackBar } from '@angular/material';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {


  constructor(private httpService: HttpService, private snackBar: MatSnackBar) { }


  ngOnInit() {

  }
  email = new FormControl('', [Validators.required, Validators.email]);
  Firstname = new FormControl('', [Validators.required]);
  Lastname = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required]);
  confirmpassword = new FormControl('', [Validators.required]);


  getFirstnameErrorMessage() {
    return this.Firstname.hasError('required') ? 'You must enter a value' : '';
  }
  getLastnameErrorMessage() {
    return this.Lastname.hasError('required') ? 'You must enter a value' : '';
  }
  getEmailErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' : '';

  }
  getpasswordErrorMessage() {
    return this.password.hasError('required') ? 'You must enter a value' : '';

  }
  getconfirmpasswordErrorMessage() {
    return this.confirmpassword.hasError('required') ? 'You must enter a value' : '';
  }
  register() {
    try {
      if (this.Firstname.value == "" || this.Lastname.value == "" || this.email.value == "") throw "fields cant be empty"
      if (this.password.value == "" || this.confirmpassword.value == "") throw "password doesnt match"

      var reqbody = {
        email: this.email.value,
        firstName: this.Firstname.value,
        lastName: this.Lastname.value,
        password: this.password.value,
      }
      this.httpService.postUser(reqbody, '/registration').subscribe(
        res => {
          console.log(res);
          this.snackBar.open("successfull registration!!", "ok", { duration: 5000 });
        },
        err => {
          console.log(err);
          
        });
    }
    catch{
      this.snackBar.open("user details cannot be empty", "", { duration: 5000 });
    }

  }


}
