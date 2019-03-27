import { Component, OnInit } from '@angular/core';
import { noteService } from 'src/app/service/noteservices/noteService';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.scss']
})
export class LabelComponent implements OnInit {
  label: any;

  constructor(private service1: noteService) { }

  ngOnInit() {
    this.getLabels();
  }
  createlabel = new FormControl('');

  
  getLabels() {
    const data = {
      userID: localStorage.getItem('id')
    };
    console.log("data on getLabels",data);
    
    this.service1.getLabels(data).subscribe(
      data => {
        this.label = data['result'];
        console.log("labels array", this.label);
      },
      error => {
        console.log('error response: ', error);
      }
    )
  }

  create(){
    var label={
      labelName:this.createlabel.value,
      userId:localStorage.getItem('id')
    }
    console.log("createlabel",label);  
    this.service1.addLabel(label).subscribe(
      data =>{
          console.log("data",data);  
          this.getLabels(); 
    },
    err =>{
         console.log(err);
         
    })
    
  }

}
