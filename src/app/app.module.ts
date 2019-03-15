import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RegistrationComponent } from './component/registration/registration.component';
import { LoginComponent } from './component/login/login.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { ForgotpasswordComponent } from './component/forgotpassword/forgotpassword.component';
import { ResetpasswordComponent } from './component/resetpassword/resetpassword.component';
import { HttpService } from './service/http.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VerifyemailComponent } from './component/verifyemail/verifyemail.component';
import {MatListModule} from '@angular/material/list';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import { MomentModule } from 'ngx-moment';
import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatInputModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule,
  
} from '@angular/material';
import { NavbarComponent } from './component/navbar/navbar.component';
import { NoteiconsComponent } from './component/noteicons/noteicons.component';
import { CardComponent } from './component/card/card.component';
import { AddNoteComponent } from './component/add-note/add-note.component';
import { ArchiveComponent } from './component/archive/archive.component';
import { DeleteComponent } from './component/delete/delete.component';
import { DialogComponent } from './component/dialog/dialog.component';
import { LabelComponent } from './component/label/label.component';
import { ReminderComponent } from './component/reminder/reminder.component';
import { SearchComponent } from './component/search/search.component';
import { PipePipe } from './pipe/pipe.pipe';


@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    ForgotpasswordComponent,
    ResetpasswordComponent,
    VerifyemailComponent,
    NavbarComponent,
    NoteiconsComponent,
    CardComponent,
    AddNoteComponent,
    ArchiveComponent,
    DeleteComponent,
    DialogComponent,
    LabelComponent,
    ReminderComponent,
    SearchComponent,
    PipePipe,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    BrowserAnimationsModule,
    CommonModule,
    MatButtonModule,
    HttpClientModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatSidenavModule,
    MatMenuModule,
    MatListModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    MomentModule
  ],
  entryComponents: [
    DialogComponent,
    ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})

export class AppModule { }
