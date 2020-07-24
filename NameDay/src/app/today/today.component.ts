import { Component, OnInit } from '@angular/core';
import { GetNameService } from '../get-name.service';

@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.css']
})
export class TodayComponent implements OnInit {
  today: any;
  us: [];
  cz: [];
  sk: [];
  pl: [];
  fr: [];
  hu: [];
  hr: [];
  se: [];
  at: [];
  it: [];
  de: [];
  es: [];


  constructor(private gettoday: GetNameService) { }
  curDate = new Date();

  ngOnInit() {
    this.gettoday.getNameDay4Today().subscribe(data => {
      this.today = data
      this.today = this.today.data

      this.today["United States Names"] = this.today["name_us"];
      delete this.today["name_us"];

      console.log(this.today)
      delete this.today.day
      delete this.today.month
      console.log(this.today)
    })
  };
}