import { Component, OnInit } from '@angular/core';
import { noteService } from 'src/app/service/noteservices/noteService';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnInit {
  archiveArray: any;
  items: any;
  trashcards: any;
  cardsArray: any;

  constructor(private service: noteService) { }

  ngOnInit() {
    this.getCards()
  }

  getCards() {
    const data = {
      userID: localStorage.getItem('id')
    };
    this.service.getNotes(data).subscribe(
      data => {
        console.log(data);
        this.items = data['result'];
        console.log("cards array ", this.items);

        // this.trashcards = this.items.filter(function (el) {
        //   return (el.delete === true && el.archive === true)
        // });

        // this.cardsArray = this.items.filter(function (el) {
        //   return (el.delete === false && el.archive === false)
        // });


      },
      error => {
        console.log('error response: ', error);
      }
    )
  }

}
