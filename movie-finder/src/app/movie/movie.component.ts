import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../service/movies.service';
@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
mymovie;
  constructor(private route: ActivatedRoute , private movieService : MoviesService) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      let id = params.id
      this.movieService.getMovie(id).subscribe((movie)=>{
        this.mymovie = movie
        console.log(movie)

      })
    })
  }

}
