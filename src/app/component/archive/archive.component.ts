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
  archive: any;

  constructor(private service: noteService) { }

  ngOnInit() {
   this.getArchivedNotes();
  }
  

  getArchivedNotes() {
    const data = {
      userID: localStorage.getItem('id')
    };
    console.log("data on archive---25",data);
    this.service.getArchivedNotes(data).subscribe(
      data => {
         this.items = data['result'];
         console.log(this.items);
         
      },
      error => {
        console.log('error response: ', error);
      }
    )
  }
 

}
