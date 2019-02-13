import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/service/http.service';
import { NgForm, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.scss']
})
export class ResetpasswordComponent implements OnInit {

  constructor(private router: ActivatedRoute, private httpService: HttpService) { }

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
    var reqbody = {
      newpassword: this.newpassword.value
    }
    this.httpService.resetpassword(reqbody, '/resetpassword').subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);


      });

  }

}
