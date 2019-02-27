import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { noteService } from '../../service/noteservices/noteService'
import { log } from 'util';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  items: any = [];
  setColor1: any;
  note: any;

  constructor(private service: noteService) { }

  ngOnInit() {
    this.getCards();
  }

  receiveUpdateColorEvent($event) {
    this.setColor1 = $event;
    //  this.updateColor(note);
    console.log("setcolor:", this.setColor1);
    console.log("notes received:", this.note);

    const updateColor = {
      _id: this.note._id,
      color: this.setColor1
    }
    console.log("color received:", updateColor);
    this.service.updateColor(updateColor).subscribe(
      data => {
        console.log(data);
        this.getCards()
      },
      error => {
        console.log(error);
      })
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

  getNotes(note) {
    this.note = note;
    console.log("notes received:", note);

  }

}
