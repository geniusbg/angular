import { Component, OnInit } from '@angular/core';
import { ListService } from '../../services/list.service'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-leagues',
  templateUrl: './leagues.component.html',
  styleUrls: ['./leagues.component.css']
})
export class LeaguesComponent implements OnInit {
  leagues: any;
  constructor(private http: ListService, private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.params.subscribe(data => {
      this.http.getLeague(data['id']).subscribe(data => {
        this.leagues = data;
        this.leagues = this.leagues['countrys']
      })
    })

  }

}
