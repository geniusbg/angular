import { Component, OnInit } from '@angular/core';
import { ListService } from '../services/list.service';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css'],
  animations: [

    trigger('listAnimation', [
      transition('* => *', [

        query(':enter', style({ opacity: 0 }), { optional: true }),

        query(':enter', stagger('100ms', [
          animate('1s ease-in', keyframes([
            style({ opacity: 0, transform: 'translateY(-75%)', offset: 0 }),
            style({ opacity: .5, transform: 'translateY(35px)', offset: 0.3 }),
            style({ opacity: 1, transform: 'translateY(0)', offset: 1.0 }),
          ]))]), { optional: true }),
      ])
    ]),
  ],
})
export class SportsComponent implements OnInit {

  constructor(private list: ListService) { }
  sports: any;

  ngOnInit() {
    this.list.getSports().subscribe(data => {
      this.sports = data
      this.sports = this.sports.sports
      console.log(this.sports)
    })
  }
}
