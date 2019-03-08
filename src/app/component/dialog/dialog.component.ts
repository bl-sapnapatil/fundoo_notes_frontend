import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA ,MatDialogRef} from '@angular/material';
import { log } from 'util';
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
setColor1: any;
  note: any;
  constructor(public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,private service: noteService) { 
      console.log("data",data);
      this.title = new FormControl(data.title)
      this.description= new FormControl(data.description)
    }

  ngOnInit() {
  }

  close(){
     this.data.title= this.title.value
     console.log("data",this.data.title);
     
     this.data.description= this.description.value
     console.log("data",this.data.description);
     
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
        // this.getCards()
      },
      error => {
        console.log(error);
      })
  }

 
 
    

}
