import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA ,MatDialogRef} from '@angular/material';
import { log } from 'util';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
flag: boolean;
title: any;
description: any;
  constructor(public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { 
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
 
 
    

}
