import { Component, OnInit } from '@angular/core';
import { noteService } from '../../service/noteservices/noteService'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  items: any = [];

  constructor(private service: noteService) { }

  ngOnInit() {
    this.getCards();
  }


  getCards() {
    const data = {
      userID: localStorage.getItem('id')
    };
    this.service.getNotes(data).subscribe(
      data => {
        console.log(data);
        this.items = data['result'];
        console.log(this.items);
      },
      error => {
        console.log('error response: ', error);
      }
    )
  }
}
