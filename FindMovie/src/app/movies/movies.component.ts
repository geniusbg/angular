import { Component, OnInit } from '@angular/core';
import { GetmovieService } from '../getmovie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  constructor(private getMovies: GetmovieService) { }
  popular: Object;
  ngOnInit() {

    this.getMovies.getPopular().subscribe(data =>{
      this.popular = data;
      console.log(this.popular)
    })

  }

}
