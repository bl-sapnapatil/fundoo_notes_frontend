import { Component, OnInit } from '@angular/core';
import { noteService } from 'src/app/service/noteservices/noteService';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {
  items: any;

  constructor(private service: noteService) { }

  ngOnInit() {
    this.getBin();
  }

  getBin() {
    const data = {
      userID: localStorage.getItem('id')
    };
    console.log("data on bin--22", data);
    this.service.getBin(data).subscribe(
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
