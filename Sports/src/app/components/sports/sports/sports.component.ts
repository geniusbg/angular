import { Component, OnInit } from '@angular/core';
import { ListService } from '../services/list.service';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent implements OnInit {
  sports: any;
  constructor(private service: ListService) { }

  ngOnInit() {
    this.service.getSports().subscribe(data => {
      this.sports = data;
      this.sports = this.sports.sports;
      console.log(this.sports)
    })

  }

}
