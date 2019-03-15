import { Component, OnInit, Output, EventEmitter ,Input} from '@angular/core';
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
  
  // @Input() items: any;
  @Input() search:string;
  ngOnInit() {
    this.getCards();
    console.log("items on cardts", this.items);
    this.viewService.currentView.subscribe(
      (response)=>{
        this.currentView=response;
      }
    )
    
    if(this.items.reminder !== null){
      this.d = new Date(this.items.reminder)
    }

  }

  receivedeleteNoteEvent($event){
      this.getCards();
  }

  receivearchiveCardEvent($event){
    this.getCards();
  }


  receiveUpdateColorEvent($event) {
    this.setColor1 = $event;
    //  this.updateColor(note);
    console.log("setcolor:", this.setColor1);
    console.log("notes received:", this.note);

    const updateColor = {
      noteId: this.note._id,
      color: this.setColor1
    }
    console.log("color received:", updateColor);
    this.service.updateColor(updateColor).subscribe(
      data => {
        console.log("data on updateColor--55",data);
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
      data: note,
    });
  //   const upData = {
  //     "title":this.note.title,
  //     "description": this.note.description,
  // };
  // console.log("title",this.note.title);
  // console.log("description",this.note.description);
    dialogRef.afterClosed().subscribe(result => {
      this.service.updateNote(note).subscribe(
        data => {
          console.log("data in dialog--",data); 
          this.getCards();
        },
        err => {
          console.log(err);

        }

      )
    });
  }
 
  removeReminder(note)
  { 
    console.log("data in items",note);
    note.reminder=null;
    this.service.updateNote(note).subscribe(
      data => {
        console.log("data", data);
        this.getCards();
      },
      err => {
        console.log(err);

      })

  }


}
