import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormControl } from '@angular/forms';
import { noteService } from 'src/app/service/noteservices/noteService';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  flag: boolean;
  title: any;
  description: any;
  note: any;
  setColor1: any;
  color: any;
  delete: boolean = false;
  archive: boolean = false;

  constructor(public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private service: noteService) {
    console.log("data", data);
    this.title = new FormControl(data.title)
    this.description = new FormControl(data.description)
  }

  ngOnInit() {
    console.log("data", this.data);

  }

  receiveUpdateColorForDialogBox($event) {
    this.color = $event;
    this.data.color = this.color;
  }

  receivedeleteNoteEvent($event) {
    console.log("event", event);

    this.delete = $event;
    this.delete = true;
  }

  receiveArchiveCardEvent($event) {
    this.archive = true;
  }


  close() {
    this.data.title = this.title.value
    console.log("data", this.data.title);

    this.data.description = this.description.value
    console.log("data", this.data.description);

  }









}
