import { Component, OnInit } from '@angular/core';
import { LivescoresService } from '../services/livescores.service';
import { GoalsPipe } from '../pipes/goals.pipe'

@Component({
  selector: 'app-livescores',
  templateUrl: './livescores.component.html',
  styleUrls: ['./livescores.component.css']
})
export class LivescoresComponent implements OnInit {

  livescores: any;
  goals: [];
  constructor(private getLivescores: LivescoresService) {

    setInterval(() => {
      this.getLivescores.getLivescores().subscribe(data => {
        this.livescores = data
        console.log(data)
        this.livescores = this.livescores.teams.Match
        console.log(this.livescores)
      })
    }, 1000 * 120);


  }
  ngOnInit() {
    this.getLivescores.getLivescores().subscribe(data => {
      this.livescores = data
      this.livescores = this.livescores.teams.Match
      console.log(this.livescores)
    })

  }
}
