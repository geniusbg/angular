import { Component, OnInit } from '@angular/core';
import { GetNameService } from '../get-name.service'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  today: Object

  constructor(private gettoday: GetNameService) { }


  ngOnInit() {
    // this.gettoday.getNameDay4Today().subscribe(data => {
    //   this.today = data;
    //   console.log(this.today)
    // })
  }

}
