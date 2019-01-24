import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

const apiKey = '5c0f1ab80ce144114982f5aac8c5da57'

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  path:string = 'https://api.themoviedb.org/3/';
  popular :string = 'discover/movie?sort_by=popularity.desc';
  theathers :string = 'discover/movie?primary_release_date.gte=2018-09-15&primary_release_date.lte=2018-10-22';
  kids : string = 'discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc';
  drama : string = 'discover/movie?with_genres=18&primary_release_year=2018';
  authentication:string = '&api_key=';
  movie : string = 'movie/';
  atutenticationMovie : string = '?api_key=';
  constructor(private http: HttpClient) { 

  }
  
  getPopular(){
   return  this.http.get(`${this.path}${this.popular}${this.authentication}${apiKey}`);
  }
  getTheater(){
    return  this.http.get(`${this.path}${this.theathers}${this.authentication}${apiKey}`);
   }
  getKids(){
    return  this.http.get(`${this.path}${this.kids}${this.authentication}${apiKey}`);
   }
   getBestDrama(){
    return  this.http.get(`${this.path}${this.drama}${this.authentication}${apiKey}`);
   }
   getMovie(id){
    return  this.http.get(`${this.path}${this.movie}`+ id +`${this.atutenticationMovie}${apiKey}`);
   }
}
