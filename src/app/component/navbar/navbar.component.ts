import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ViewChangeServiceService } from 'src/app/service/view-change-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  events: string[] = [];
  opened: boolean;
  show: boolean;

  shouldRun = true;
  titleName: string;

  constructor(private router:Router,private viewService:ViewChangeServiceService) { }

  ngOnInit() {
    this.viewService.currentView.subscribe(
      response=>{
        this.show =response;
      });
  }
  addAccount(){
    this.router.navigate(['register']);
  }
  signout(){
    this.router.navigate(['login']);
  }
  note(){
  this.titleName= "FundooNotes"
  }
  Reminders(){
    this.titleName= "Reminders"
  }
  editLabels(){
    this.titleName= "Edit label"
  }
  Archive(){
    this.titleName= "Archive"
  }
  Bin(){
    this.titleName= "Bin"
  }

  setGridAndListView(){
    this.viewService.onViewChange();
  }


}
