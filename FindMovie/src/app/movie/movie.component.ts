import { Component, OnInit } from '@angular/core';
import { GetmovieService } from '../getmovie.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  constructor(private movie : GetmovieService, private route : ActivatedRoute) { }
  
  myMovie :Object;
  ngOnInit() {
    let id:string;
    this.route.params.subscribe(data =>{id = data.id})
    this.movie.getMovie(id).subscribe(data =>{
      this.myMovie = data;
      console.log(data)
      console.log(this.myMovie);
    })
    console.log (id);
  }

}
