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

 //method to show firstname error message.
  getFirstnameErrorMessage() {
    return this.Firstname.hasError('required') ? 'Enter first name' : '';
  }

  //method to show lastname error message.
  getLastnameErrorMessage() {
    return this.Lastname.hasError('required') ? 'Enter last name' : '';
  }

  //method to show email error message.
  getEmailErrorMessage() {
    return this.email.hasError('required') ? 'Enter email' : '';

  }

  //method to show password error message.
  getpasswordErrorMessage() {
    return this.password.hasError('required') ? 'Enter password' : '';

  }

  //method to show confirmpassword error message.
  getconfirmpasswordErrorMessage() {
    return this.confirmpassword.hasError('required') ? 'Enter password again' : '';
  }
  register() {
    try {
      //to check for empty fields.
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
          //snackBar is used to show message.
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
