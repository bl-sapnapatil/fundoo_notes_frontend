import { Component } from '@angular/core';
import { MessagingService } from './service/messaging.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'fundooClient';
  message;

  constructor(private msgservice: MessagingService){}

  ngOnInit(){
    this.msgservice.getPermission();
    this.msgservice.receiveMessage();
    this.message= this.msgservice.currentMessage
  }
}

