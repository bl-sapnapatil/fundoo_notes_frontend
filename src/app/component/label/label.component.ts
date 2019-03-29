import { Component, OnInit } from '@angular/core';
import { noteService } from 'src/app/service/noteservices/noteService';
import { FormControl } from '@angular/forms';
import { ViewChangeServiceService } from 'src/app/service/view-change-service.service';

@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.scss']
})
export class LabelComponent implements OnInit {
  label: any;
  changeText: boolean;

  constructor(private service1: noteService,private data : ViewChangeServiceService) {this.changeText = false; }

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
      dataa =>{
          console.log("data",dataa);  
           this.data.createLabel("update"); 
          this.getLabels(); 
    },
    err =>{
         console.log(err);
         
    })
    
  }

  delete(labels){
    this.service1.deleteLabel(labels).subscribe(
      data =>{
        console.log("data",data);  
        this.data.deleteLabel("done");
    },
    err =>{
      console.log(err);
    })
  }
 


}
