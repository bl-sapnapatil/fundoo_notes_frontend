import { Component, OnInit } from '@angular/core';
import { NgForm, Validators, FormControl } from '@angular/forms';
import { HttpService } from 'src/app/service/http.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.scss']
})
export class ForgotpasswordComponent implements OnInit {


  constructor(private httpService: HttpService,private snackBar: MatSnackBar) { }

  ngOnInit() {
  }
  email = new FormControl('', [Validators.required, Validators.email]);

  getEmailErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' : '';
  }
  sendlink() {
    var reqbody = {
      email: this.email.value
    }
    this.httpService.postUser(reqbody, '/forgotpassword').subscribe(
      res => {
        console.log(res);
        this.snackBar.open("link sent to your registered email id!!", "ok", { duration: 5000 });
      },
      err => {
        console.log(err)



      }

    );
  }

}
