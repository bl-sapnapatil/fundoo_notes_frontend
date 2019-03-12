import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { noteService } from '../../service/noteservices/noteService';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { DialogComponent } from '../dialog/dialog.component';
import { ViewChangeServiceService } from 'src/app/service/view-change-service.service';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  items: any = [];
  setColor1: any;
  note: any;
  trashcards: any;
  cardsArray: any;
  currentView:boolean;
  d: Date;
  flag: boolean;
  // reminder: any;
  constructor(private service: noteService,private viewService:ViewChangeServiceService, public dialog: MatDialog) { }

  ngOnInit() {
    this.getCards();

    this.viewService.currentView.subscribe(
      (response)=>{
        this.currentView=response;
      }
    )


  }

  // receiveReminderEvent($event) {
  //   this.reminder= $event;
  //   console.log("Reminder",this.reminder);

  // }

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
        console.log("cards array ", this.items);

        this.trashcards = this.items.filter(function (el) {
          return (el.delete === true && el.archive === true)
        });

        this.cardsArray = this.items.filter(function (el) {
          return (el.delete === false && el.archive === false)
        });


      },
      error => {
        console.log('error response: ', error);
      }
    )
  }

  getNotes(note) {
    // console.log("note in getNotes---60",note);
    this.note = note;
    console.log("notes received:", note);

  }


  openDialog(note) {
    console.log("note", note);
    const dialogRef = this.dialog.open(DialogComponent, {
      data: note
    });
    dialogRef.afterClosed().subscribe(result => {
      this.service.updateNote(note).subscribe(
        data => {
          this.getCards();
        },
        err => {
          console.log(err);

        }

      )
    });
  }
 
  removeReminder()
  {
    this.items.reminder=null;
    this.service.updateNote(this.items).subscribe(
      data => {
        console.log("data", data);
      },
      err => {
        console.log(err);

      })

  }


}
