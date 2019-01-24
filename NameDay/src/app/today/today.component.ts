import { Component, OnInit } from '@angular/core';
import { GetdataService } from '../getdata.service'


@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.css']
})
export class TodayComponent implements OnInit {

  constructor(private getNames: GetdataService) { }
  names;
  country: string;
  namesToShow: string;
  namesSplit: string[];
  date: Date = new Date(Date.now());
  sorted: Object;

  ngOnInit() {
    this.getNames.getNameForToday().subscribe(data => {
      this.names = data;
      this.names = this.names.data;

      // removes the day and mount because i have them with date.now();
      delete this.names.day;
      delete this.names['month'];

      //change origial properties by real country names in two lines of code 
      this.names['united states'] = this.names['name_us'];
      delete this.names['name_us']

      //change origial properties by real country names in one line 
      delete Object.assign(this.names, { ['sweden']: this.names['name_se'] })['name_se'];
      delete Object.assign(this.names, { ['slovakia']: this.names['name_sk'] })['name_sk'];
      delete Object.assign(this.names, { ['italy']: this.names['name_it'] })['name_it'];
      delete Object.assign(this.names, { ['hungary']: this.names['name_hu'] })['name_hu'];
      delete Object.assign(this.names, { ['croatia']: this.names['name_hr'] })['name_hr'];
      delete Object.assign(this.names, { ['france']: this.names['name_fr'] })['name_fr'];
      delete Object.assign(this.names, { ['spain']: this.names['name_es'] })['name_es'];
      delete Object.assign(this.names, { ['germany']: this.names['name_de'] })['name_de'];
      delete Object.assign(this.names, { ['autstria']: this.names['name_at'] })['name_at'];
      delete Object.assign(this.names, { ['czech republic']: this.names['name_cz'] })['name_cz'];
      delete Object.assign(this.names, { ['poland']: this.names['name_pl'] })['name_pl'];
      //sort by country name
      Object.keys(this.names).sort().reduce((r, k) => (r[k] = this.names[k], r), {});
      //remove ','
      Object.keys(this.names).forEach((key) => {
        // this.names[key] = this.names[key].replace(/,/g, ' ');
      });
    })


  }

}