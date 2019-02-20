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

  constructor(private router:Router) { }

  ngOnInit() {
  }
  addAccount(){
    this.router.navigate(['register']);
  }
  signout(){
    this.router.navigate(['login']);
  }

}
