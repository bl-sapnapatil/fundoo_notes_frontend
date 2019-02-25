import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-noteicons',
  templateUrl: './noteicons.component.html',
  styleUrls: ['./noteicons.component.scss']
})
export class NoteiconsComponent implements OnInit {

  constructor() { }

  @Output() setColorEvent = new EventEmitter<any>();

  ngOnInit() {
  }

  arrayOfColors = [
    [
    
      { 'color': 'rgb(255,255,255)','name':'White'},
      {'color': 'rgb(242,139,130)','name':'Red'},
      {'color': 'rgb(251,188,4)','name':'Orange'},
      {'color': 'rgb(255,244,117)','name':'yellow'}],
  [
    {'color': 'rgb(0,255,127)','name':'Green'},
    {'color': 'rgb(0,128,128)','name':'teal'},
    {'color': 'rgb(100,149,237)','name':'blue'},
    {'color': 'rgb(0,191,255','name':'skyblue'}],
  [
    {'color':'rgb(0,206,209)', 'name':'Turquoise'},
    {'color':'rgb(255,127,80)','name':'Brown'},
    {'color':'rgb(255,105,180)','name':'Pink'},
    {'color':'rgb(186,85,211)', 'name':'Purple'}]
    
   ]

   setColor(){
     this.setColorEvent.emit(this.setColor);
   }

}
