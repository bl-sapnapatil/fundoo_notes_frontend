import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './component/registration/registration.component';
import { LoginComponent } from './component/login/login.component';
import { ForgotpasswordComponent } from './component/forgotpassword/forgotpassword.component';
import { ResetpasswordComponent } from './component/resetpassword/resetpassword.component';
import { VerifyemailComponent } from './component/verifyemail/verifyemail.component';

//defined an array for our routes, named routes
const routes: Routes = [
  {
    path: 'login',  //login route is mapped with LoginComponent
    component: LoginComponent
  },
  {
    path: 'register', //register route is mapped with RegistrationComponent
    component: RegistrationComponent,
  },
  {
    path: 'forgotpassword', //forgotpassword route is mapped with ForgotpasswordComponent
    component: ForgotpasswordComponent,
  },
  {
    path: 'resetpassword/:token',  //resetpassword route is mapped with ResetpasswordComponent
    component: ResetpasswordComponent,
  },
  {
    path: 'verifyemail/:token',   //verifyemail route is mapped with VerifyemailComponent
    component:VerifyemailComponent,
  },
  {
     path: '',    //a blank route i.e when no other route is found in the URL after the domain name, we are mapping it to LoginComponent.
     component: LoginComponent,
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
