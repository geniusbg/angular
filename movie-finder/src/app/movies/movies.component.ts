import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../service/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  popular: Object;
  theaters: Object;
  kids: Object;
  drama: Object;

  constructor(private movieService: MoviesService) { }

  ngOnInit() {
    this.movieService.getPopular().subscribe(data => {
      this.popular = data;
    })

    this.movieService.getTheaters().subscribe(data => { this.theaters = data })

    this.movieService.getKids().subscribe(data => { this.kids = data })

    this.movieService.getDrama().subscribe(data => { this.drama = data })
  }

}
