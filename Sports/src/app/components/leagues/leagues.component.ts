import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ListService } from '../../services/list.service'

@Component({
  selector: 'app-leagues',
  templateUrl: './leagues.component.html',
  styleUrls: ['./leagues.component.css']
})
export class LeaguesComponent implements OnInit, OnChanges {

  @Input() strSports: string

  leagues: any;

  constructor(private http: ListService) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['strSports']) {
      this.ngOnInit()
    }
  }

  ngOnInit() {
    this.http.getLeague(this.strSports).subscribe(data => {
      this.leagues = data;
      this.leagues = this.leagues['countrys']
      console.log(this.leagues)
    })
  }
}
