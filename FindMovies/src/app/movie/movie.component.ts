import { Component, OnInit } from '@angular/core';
import { GetmovieService } from '../getmovie.service';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  mymovie;

  constructor(private route: ActivatedRoute, private getMovie: GetmovieService) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      let id = params.id;
      this.getMovie.getMovie(id).subscribe(movie => {this.mymovie = movie})
    })
  }

}
