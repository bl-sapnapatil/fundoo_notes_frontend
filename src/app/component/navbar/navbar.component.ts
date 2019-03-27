import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ViewChangeServiceService } from 'src/app/service/view-change-service.service';
import { SearchService } from 'src/app/service/search.service';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { ProfilePicComponent } from '../profile-pic/profile-pic.component';
import { noteService } from 'src/app/service/noteservices/noteService';
import { LabelComponent } from '../label/label.component';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  events: string[] = [];
  search: string;
  opened: boolean;
  show: boolean;
  shouldRun = true;
  titleName: string;
  imageChangedEvent: any = '';
  croppedImage: any = '';
  imgUrl: any;
  label: any;


  constructor(private router: Router, private viewService: ViewChangeServiceService, private service: SearchService,public dialog: MatDialog,private service1: noteService) { }

  ngOnInit() {
    this.viewService.currentView.subscribe(
      response => {
        this.show = response;
      });
      this.viewService.currentImg.subscribe(
        data =>{
         this.imgUrl = data;
         console.log("imgUrl at navbar",this.imgUrl); 
      })
      this.getProfile();
      this.getLabels();
  }
  addAccount() {
    this.router.navigate(['register']);
  }
  signout() {
    localStorage.clear();
    this.router.navigate(['login']);
  }
  note() {
    this.titleName = "FundooNotes"
  }
  Reminders() {
    this.titleName = "Reminders"
  }
  editLabels() {
    this.titleName = "Edit label"
  }
  Archive() {
    this.titleName = "Archive"
  }
  Bin() {
    this.titleName = "Bin"
  }

  setGridAndListView() {
    this.viewService.onViewChange();
  }
  lookUp() {
    console.log("search at navbar", this.search);
    this.service.changeMessage(this.search);

  }

  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
  }
  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
  }
  openDialog() {
    const dialogRef = this.dialog.open(ProfilePicComponent, {
    });
    dialogRef.afterClosed().subscribe(result => {
    });
    err =>{
    }
  }


  openDialog1() {
    const dialogRef = this.dialog.open(LabelComponent, {
    });
    dialogRef.afterClosed().subscribe(result => {
    });
    err =>{
    }
  }


  getProfile() {
    const data = {
      userID: localStorage.getItem('id')
    };
    console.log("data on getProfile",data);
    this.service1.getProfile(data).subscribe(
      data => {
        console.log("user data at navbar",data);

        console.log((data as any));
        this.imgUrl = (data as any).result[0].profilePic;
        // console.log("profile: ",imgUrl);
      },
      error => {
        console.log('error response: ', error);
      }
    )
  }


  getLabels() {
    const data = {
      userID: localStorage.getItem('id')
    };
    console.log("data on getLabels",data);
    
    this.service1.getLabels(data).subscribe(
      data => {
        this.label = data['result'];
        console.log("nnnn---107", this.label);
      },
      error => {
        console.log('error response: ', error);
      }
    )
  }



}
