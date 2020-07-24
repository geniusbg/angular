import { Component, OnInit } from '@angular/core';
import { GetmovieService } from '../getmovie.service'

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
  constructor(private movies:GetmovieService) { }


  ngOnInit() {
    this.movies.getPopular().subscribe(data =>{this.popular = data;})
    this.movies.getTheaters().subscribe(data =>{this.theaters = data;})
    this.movies.getKids().subscribe(data =>{this.kids = data;})
    this.movies.getDrama().subscribe(data =>{this.drama = data;})
  }

}
