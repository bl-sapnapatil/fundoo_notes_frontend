import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/service/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  message: any;

  constructor(private data: SearchService) { }

  ngOnInit() {
    
    this.data.currentMessage.subscribe(
      message => {this.message = message
        console.log("currentMessage",this.message)

      })
  }

}
