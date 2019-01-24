import { Component, OnInit } from '@angular/core';
import {GetmoviesService} from '../getmovies.service'
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
popular : Object;
  constructor(private movieService: GetmoviesService) { 

  }

  ngOnInit() {
    this.movieService.getPopular().subscribe(data=>{
      this.popular = data;
      console.log (data)
    })
  }

}
