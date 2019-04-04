import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './component/registration/registration.component';
import { LoginComponent } from './component/login/login.component';
import { ForgotpasswordComponent } from './component/forgotpassword/forgotpassword.component';
import { ResetpasswordComponent } from './component/resetpassword/resetpassword.component';
import { VerifyemailComponent } from './component/verifyemail/verifyemail.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { AddNoteComponent } from './component/add-note/add-note.component';
import { ArchiveComponent } from './component/archive/archive.component';
import { DeleteComponent } from './component/delete/delete.component';
import { DialogComponent } from './component/dialog/dialog.component';
import { ReminderComponent } from './component/reminder/reminder.component';
import { SearchComponent } from './component/search/search.component';
import { CollabdialogComponent } from './component/collabdialog/collabdialog.component';
import { ProfilePicComponent } from './component/profile-pic/profile-pic.component';
import { AuthGuardService } from './service/auth.guard';
import { LabelComponent } from './component/label/label.component';

//defined an array for our routes, named routes
const routes: Routes = [
  {
    path: '',
    component: LoginComponent

  },
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
    component: VerifyemailComponent,
  },
  
  {
    path: 'navbar',
    canActivate : [AuthGuardService],
    component: NavbarComponent, children: [
      {
        path: '',    //a blank route i.e when no other route is found in the URL after the domain name, we are mapping it to LoginComponent.
        component: AddNoteComponent
      },
      {
        path: 'addNote',
        component: AddNoteComponent
      },
      {
        path: 'archive',
        component: ArchiveComponent
      },
      {
        path: 'delete',
        component: DeleteComponent
      },
      {
        path: 'reminder',
        component: ReminderComponent
      },
      {
        path: 'search',
        component:  SearchComponent
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
