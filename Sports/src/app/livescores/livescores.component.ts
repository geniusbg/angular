import { Component, OnInit } from '@angular/core';
import { LivescoresService } from '../services/livescores.service';

@Component({
  selector: 'app-livescores',
  templateUrl: './livescores.component.html',
  styleUrls: ['./livescores.component.css']
})
export class LivescoresComponent implements OnInit {
  livescores: any;

  constructor(private getLivescores: LivescoresService) { }

  ngOnInit() {
    this.getLivescores.getLivescores().subscribe(data => {
      this.livescores = data
      this.livescores = this.livescores.teams
      console.log(this.livescores)
      if (this.livescores.Match && this.livescores.Match.Date) {
        this.livescores = this.livescores.teams
        console.log("From IF")
        console.log(this.livescores)
      }
      else {
        console.log(this.livescores)
        console.log("From ELSE")
        this.livescores = this.livescores.Match
      }
    })
  }
}
