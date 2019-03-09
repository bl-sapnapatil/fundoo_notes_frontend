import { Injectable } from '@angular/core';
import { BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ViewChangeServiceService {
  private view = new  BehaviorSubject(true);
  currentView=this.view.asObservable();
  private views;
    
  constructor() { }
  onViewChange()
{
  this.currentView.subscribe(
    response =>{
     this.views = response;
    });
    this.view.next(!this.views)
}

}




