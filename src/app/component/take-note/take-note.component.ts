import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-take-note',
  templateUrl: './take-note.component.html',
  styleUrls: ['./take-note.component.scss']
})
export class TakeNoteComponent implements OnInit {
  flag: boolean = true;

  constructor() { }

  ngOnInit() {
  }
  // Title = new FormControl;
  // Content = new FormControl;
  
  flip()
  {
    this.flag = !this.flag;
  }

}
