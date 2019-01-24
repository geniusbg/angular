import { Component, OnInit } from '@angular/core';
import { GetmoviesService } from '../getmovies.service'
import { ActivatedRoute } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  mymovie: Object

  constructor(private route: ActivatedRoute, private getMovie: GetmoviesService) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      console.log(params)
      let id = params.id
     
      this.getMovie.getMovie(id).subscribe((movie) =>{
        this.mymovie = movie; 
        console.log(movie);
      })
    })
    

  }
}
