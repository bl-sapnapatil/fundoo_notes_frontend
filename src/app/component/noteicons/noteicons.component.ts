import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-noteicons',
  templateUrl: './noteicons.component.html',
  styleUrls: ['./noteicons.component.scss']
})
export class NoteiconsComponent implements OnInit {

  constructor() { }

  @Output() setColorEvent = new EventEmitter<any>();
  @Output() updateColorEvent = new EventEmitter<any>();


  ngOnInit() {
  }

  arrayOfColors = [
    [
    
      { 'color': 'rgb(255,255,255)','name':'White'},
      {'color': 'rgb(242, 139, 130)','name':'Red'},
      {'color': 'rgb(251, 188, 4)','name':'Orange'},
      {'color': 'rgb(255, 244, 117)','name':'yellow'}],
  [
    {'color': 'rgb(204, 255, 144)','name':'Green'},
    {'color': 'rgb(167, 255, 235)','name':'teal'},
    {'color': 'rgb(203, 240, 248)','name':'blue'},
    {'color': 'rgb(174, 203, 250)','name':'Darkblue'}],
  [
    {'color':'rgb(215, 174, 251)', 'name':'Purple'},
    {'color':'rgb(253, 207, 232)','name':'Pink'},
    {'color':'rgb(230, 201, 168)','name':'Brown'},
    {'color':'rgb(232, 234, 237)', 'name':'Gray'}]
    
   ]

   setColor(colorId){
     this.setColorEvent.emit(colorId);
     this.updateColorEvent.emit(colorId);
   }

  
    
  

}
