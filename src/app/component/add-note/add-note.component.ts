import { Component, OnInit , Output, EventEmitter} from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { noteService } from 'src/app/service/noteservices/noteService';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.scss']
})
export class AddNoteComponent implements OnInit {
  flag: boolean = true;
  setColor = '#FFFFF';
  
  constructor(private notehttpservice: noteService ,private snackBar: MatSnackBar) { }

  // @Output() childEvent = new EventEmitter<any>();


  ngOnInit() {
  }
  title = new FormControl('')
  description= new FormControl('')

  
  flip()
  {
    this.flag = !this.flag;
  }
     
  receiveColorEvent($event) {
    this.setColor = $event;
    console.log("ccolor received:",this.setColor);

  }


  addNote() {
    var reqbody = {
      "title":this.title.value,
      "description":this.description.value,
      "pinned":false,
      "remindMe":"",
      "color":this.setColor,
      "image":"",
      "archive":false,
      "delete":false,
      "userID":localStorage.getItem('id')
        
    }
    console.log("reqbody---37",reqbody);
    
    this.notehttpservice.postUser(reqbody, '/createNotes').subscribe(
      
      res => {
        console.log(res);
        //snackbar to show messages.
        this.snackBar.open("note added successfully", "", { duration: 5000 });
      },
      err => {
        console.log("error: ", err)
         this.snackBar.open("note not added", "", {
          duration: 500,
        });

      });
    }
    
}
