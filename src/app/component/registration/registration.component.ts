import { Component, OnInit } from '@angular/core';
import { NgForm, Validators, FormControl } from '@angular/forms';
import { Registeruser } from 'src/app/model/registermodel';
import { HttpService } from 'src/app/service/http.service';
import { log } from 'util';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
  showSucessMessage: boolean;
  serverErrorMessages: any;
      
  constructor(private httpService:HttpService) { }
 

  ngOnInit() {
  
  }
  email = new FormControl('', [Validators.required, Validators.email]);
  Firstname=new FormControl('', [Validators.required]);
  Lastname=new FormControl('', [Validators.required]);
  password=new FormControl('', [Validators.required]);
  confirmpassword =new FormControl('', [Validators.required]);


  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }
  getFirstnameErrorMessage() {
    return this.Firstname.hasError('required') ? 'You must enter a value' :
        
            '';
  }
  getLastnameErrorMessage(){
    return this.Lastname.hasError('required') ? 'You must enter a value' :
        
            '';
  }
  getEmailErrorMessage(){
    return this.password.hasError('required') ? 'You must enter a value' :
        
            '';

  }
  getpasswordErrorMessage(){
    return this.confirmpassword.hasError('required') ? 'You must enter a value' :
        
            '';

  }
  getconfirmpasswordErrorMessage(){
    return this.confirmpassword.hasError('required') ? 'You must enter a value' :
        
            '';
  }
  register(){
    // console.log(this.email.value);
    var reqbody = {
      email:this.email.value,
      firstName: this.Firstname.value,
      lastName:  this.Lastname.value,
      password: this.password.value,
      }
    this.httpService.postUser(reqbody,'/registration').subscribe(
          res => {
            this.showSucessMessage = true;
            console.log(res);
            
          },
          err => {
            if (err.status === 422) {
              this.serverErrorMessages = err.error.join('<br/>');
            }
            else
              this.serverErrorMessages = 'Something went wrong.Please contact admin.';
          }
        );
  }
  

  }
