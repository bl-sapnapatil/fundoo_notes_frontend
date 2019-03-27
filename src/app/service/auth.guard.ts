
import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { HttpService } from 'src/app/service/http.service';
import { MatSnackBar } from '@angular/material';

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(public auth: HttpService, public router: Router , private snackBar : MatSnackBar) {}
  canActivate(): boolean {
    if (!this.auth.isAuthenticated()) {
      this.snackBar.open("First sign in to see dashboard" , "" , {duration : 2000});
      this.router.navigate(['login']);
      return false;
    }
    this.snackBar.open("Welcome !!!" , "" , {duration : 2000});

    return true;
  }
}
