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
      this.livescores = this.livescores.teams.Match
      console.log(this.livescores)
    })

  }

}
