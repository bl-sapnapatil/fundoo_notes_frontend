import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ViewChangeServiceService {
  private view = new BehaviorSubject(true);
  currentView = this.view.asObservable();

  private imgSource = new BehaviorSubject(" ");
  currentImg = this.imgSource.asObservable();

  private addlabel = new BehaviorSubject(" ");
  currentlabel = this.addlabel.asObservable();

  private deletelabel = new BehaviorSubject(" ");
  dellabel = this.deletelabel.asObservable();

  private views;

  constructor() { }
  onViewChange() {
    this.currentView.subscribe(
      response => {
        this.views = response;
      });
    this.view.next(!this.views)
  }

  searchImg(data: string) {
    this.imgSource.next(data);
    console.log("hhhh",data);  
  }
  
  createLabel(data: any){
    this.addlabel.next(data);
    console.log("data--35",data); 
  }
   
  deleteLabel(data:any){
    this.deletelabel.next(data)
    // console.log("data");
    
  }
}




