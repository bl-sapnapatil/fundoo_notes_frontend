import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { noteService } from '../../service/noteservices/noteService';
import { MatSnackBar } from '@angular/material';
import { log } from 'util';


@Component({
  selector: 'app-noteicons',
  templateUrl: './noteicons.component.html',
  styleUrls: ['./noteicons.component.scss']
})
export class NoteiconsComponent implements OnInit {
  archiveCards: any[];
  archiveValue:boolean;

  constructor(private noteService: noteService, private snackBar: MatSnackBar) { }
  @Input() items: any;
  @Input() note: any;
  @Output() setColorEvent = new EventEmitter<any>();
  @Output() updateColorEvent = new EventEmitter<any>();

  ngOnInit() {
  }

     
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
  }

  deleteNote() {
    var notesInTrash = {};
    console.log("items in cards", this.items);

    if (this.items == "") {
      notesInTrash = {
        "_id": this.items._id,
        "delete": true
      }
    } else {
      notesInTrash = {
        "_id": this.items._id,
        "delete": true
      }
      this.noteService.deletedNotes(notesInTrash).subscribe(
        data => {

          this.snackBar.open("note deleted successfully", "", { duration: 5000 });
        },
        err => {
          this.snackBar.open("note not deleted successfully", "", { duration: 5000 });

        }

      )

    }

  }


  archivedNotes() {
    console.log("items in cards for archived", this.items);
 
       const archNote = {
        "_id": this.items._id,
        "archive":true
      }
      console.log("after archived",archNote)
      this.noteService.archivedNotes(archNote).subscribe(
       data => {
        console.log("data in archive",data);
        this.snackBar.open("Note archived", "", { duration: 5000 });
        },
        err => {
          this.snackBar.open("Note not archived ", "", { duration: 5000 });
        }
      )

    }

    setLaterToday()
    {

    }
  }

  
  



  
    
  


