import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/service/http.service';
import { NgForm, Validators, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.scss']
})
export class ResetpasswordComponent implements OnInit {

  constructor(private router: ActivatedRoute, private httpService: HttpService,private snackBar: MatSnackBar) { }

  ngOnInit() {
    let token = this.router.snapshot.params['token'];
    console.log(token);
    localStorage.setItem('generatedToken', token);

  }
  password = new FormControl('',[Validators.required]);
  newpassword = new FormControl('', [Validators.required]);
  getnewpasswordErrorMessage() {
    return this.newpassword.hasError('required') ? 'You must enter a value' : '';

  }
  getpasswordErrorMessage() {
    return this.password.hasError('required') ? 'You must enter a value' : '';

  }

  reset() {
    try{
      if(this.password.value == "" || this.newpassword.value == "") throw "fields cannot be empty"
    var reqbody = {
      password: this.newpassword.value
    }
    this.httpService.resetpassword(reqbody, '/resetpassword').subscribe(
      res => {
        console.log(res);
        this.snackBar.open("password changed successfully!!", "ok", { duration: 5000 });
      },
      err => {
        console.log(err);

      });
    }
    catch{
      this.snackBar.open("password and confirm password cannot be empty", "", { duration: 5000 });
    }

  }

}
