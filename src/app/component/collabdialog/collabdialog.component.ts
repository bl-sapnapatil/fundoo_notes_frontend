import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';


@Component({
  selector: 'app-collabdialog',
  templateUrl: './collabdialog.component.html',
  styleUrls: ['./collabdialog.component.scss']
})
export class CollabdialogComponent implements OnInit {


  constructor(public dialogRef: MatDialogRef<CollabdialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {

  }
  ngOnInit() {
  }

  a = localStorage.getItem('firstName')
  b = localStorage.getItem('lastName')
  c = localStorage.getItem('email')

}
