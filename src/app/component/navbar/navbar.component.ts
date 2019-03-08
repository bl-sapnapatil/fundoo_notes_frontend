import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  events: string[] = [];
  opened: boolean;

  shouldRun = true;
  titleName: string;

  constructor(private router:Router) { }

  ngOnInit() {
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


}
