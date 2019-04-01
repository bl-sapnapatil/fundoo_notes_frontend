import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { NgForm, Validators, FormControl } from '@angular/forms';
import { noteService } from '../../service/noteservices/noteService';
import { MatSnackBar, MatDialog } from '@angular/material';
import { MomentModule } from 'ngx-moment';
import { CollabdialogComponent } from '../collabdialog/collabdialog.component';


@Component({
  selector: 'app-noteicons',
  templateUrl: './noteicons.component.html',
  styleUrls: ['./noteicons.component.scss']
})
export class NoteiconsComponent implements OnInit {
  archiveCards: any[];
  archiveValue: boolean;
  d: Date;
  d1: Date;
  labelArray: any = [];
  data: any;
  labelArray1: any;
  // labelsarray: any[];

  constructor(private noteService: noteService, private snackBar: MatSnackBar, public dialog: MatDialog) { }
  @Input() items: any;
  @Input() note: any;
  @Input() childMessage: any = "";
  @Output() setColorEvent = new EventEmitter<any>();
  @Output() updateColorEvent = new EventEmitter<any>();
  @Output() updateColorForDialogBox = new EventEmitter<any>();
  @Output() deleteNoteEvent = new EventEmitter<any>();
  @Output() archiveCardEvent = new EventEmitter<any>();
  @Output() addLabelEvent = new EventEmitter<any>();
  // @Output() reminderEvent = new EventEmitter<any>();

  ngOnInit() {
    this.getLabels();
  }
  dPicker = new FormControl('');
  tPicker = new FormControl('');



  arrayOfColors = [
    [

      { 'color': 'rgb(255,255,255)', 'name': 'White' },
      { 'color': 'rgb(242, 139, 130)', 'name': 'Red' },
      { 'color': 'rgb(251, 188, 4)', 'name': 'Orange' },
      { 'color': 'rgb(255, 244, 117)', 'name': 'yellow' }],
    [
      { 'color': 'rgb(204, 255, 144)', 'name': 'Green' },
      { 'color': 'rgb(167, 255, 235)', 'name': 'teal' },
      { 'color': 'rgb(203, 240, 248)', 'name': 'blue' },
      { 'color': 'rgb(174, 203, 250)', 'name': 'Darkblue' }],
    [
      { 'color': 'rgb(215, 174, 251)', 'name': 'Purple' },
      { 'color': 'rgb(253, 207, 232)', 'name': 'Pink' },
      { 'color': 'rgb(230, 201, 168)', 'name': 'Brown' },
      { 'color': 'rgb(232, 234, 237)', 'name': 'Gray' }]

  ]

  setColor(colorId) {
    this.setColorEvent.emit(colorId);
    this.updateColorEvent.emit(colorId);
    this.updateColorForDialogBox.emit(colorId);
  }


  deleteNote() {
    console.log("items in cards for delete", this.items);
    const deleteNote = {
      "_id": this.items._id,
      "delete": true
    }
    console.log("after delete", deleteNote);
    this.noteService.deletedNotes(deleteNote).subscribe(
      data => {
        this.snackBar.open("note deleted successfully", "", { duration: 5000 });
        this.deleteNoteEvent.emit("done");
      },
      err => {
        this.snackBar.open("note not deleted successfully", "", { duration: 5000 });
      }
    )

  }


  archivedNotes() {
    console.log("items in cards for archived", this.items);
    const archNote = {
      "_id": this.items._id,
      "archive": true
    }
    console.log("after archived", archNote)
    this.noteService.archivedNotes(archNote).subscribe(
      data => {
        console.log("data in archive", data);
        this.snackBar.open("Note archived", "", { duration: 5000 });
        this.archiveCardEvent.emit("done");
      },
      err => {
        this.snackBar.open("Note not archived ", "", { duration: 5000 });
      }
    )

  }


  openDialog() {
    const dialogRef = this.dialog.open(CollabdialogComponent, {
    });
    dialogRef.afterClosed().subscribe(result => {
    });
    err => {

    }
  }


  setLaterToday() {
    let laterToday = new Date().toLocaleDateString() + ", " + "20:00";
    this.items.reminder = laterToday;
    this.noteService.updateNote(this.items).subscribe(
      data => {
        console.log("data", data);
      },
      err => {
        console.log(err);

      })

  }

  setTomorrow() {
    const today = new Date();
    const tomorrow = new Date();
    tomorrow.setHours(20, 0, 0);
    tomorrow.setDate(today.getDate() + 1);
    const date = new Date(tomorrow);
    this.items.reminder = date;
    this.d = new Date(this.items.reminder);
    console.log("date", this.d);
    var dat = this.d.toLocaleDateString() + ", " + this.d.toLocaleTimeString();
    console.log("date1", dat);
    this.items.reminder = dat;
    this.noteService.updateNote(this.items).subscribe(
      data => {
        console.log("data", data);
      },
      err => {
        console.log(err);
      })

  }



  setNextweek() {
    var d = new Date();
    d.setHours(d.getHours() + 168);
    var date = new Date(d);
    this.items.reminder = date;
    this.d = new Date(this.items.reminder);
    console.log("date of next week", this.d);
    var dat = this.d.toLocaleDateString() + "," + "20:00";
    console.log("date1", dat);
    this.items.reminder = dat;
    this.noteService.updateNote(this.items).subscribe(
      data => {
        console.log("data", data);
      },
      err => {
        console.log(err);
      })

  }

  saveReminder() {
    console.log("picked date: ", this.dPicker.value);
    var date = this.dPicker.value.toLocaleDateString() + "," + this.tPicker.value;
    this.items.reminder = date;
    console.log("date in SaveReminder--", date);
    this.noteService.updateNote(this.items).subscribe(
      data => {
        console.log("data", data);
      },
      err => {
        console.log(err);
      });
  }


  getLabels() {
    const data = {
      userID: localStorage.getItem('id')
    };
    console.log("data on getLabels", data);

    this.noteService.getLabels(data).subscribe(
      data => {
        this.labelArray = data['result'];
        console.log("getlabelsarray", this.labelArray);
      },
      error => {
        console.log('error response: ', error);
      }
    )
  }


  addLabel(label) {
    console.log("data on items in addlabeltonote", label);
    var addLabel = {
      "noteId": this.items._id,
      "labelData": {
        "labelName": label.labelName,
        "labelid": label._id
      }
    }
    console.log("label Name", addLabel);
    // // console.log("label id",this.label._id);
    this.noteService.addLabeltoNote(addLabel).subscribe(
      data => {
        //  this.labelArray = data['result'];
        console.log(" add labels array", this.labelArray);
        this.addLabelEvent.emit("done");
      },
      err => {
        console.log('error response: ', err);
      }
    )
  }



}











