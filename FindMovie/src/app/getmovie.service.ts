import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'



@Injectable({
  providedIn: 'root'
})
export class GetmovieService {
  apiKey = '5c0f1ab80ce144114982f5aac8c5da57';
  path:string = 'https://api.themoviedb.org/3/';
  popular :string = 'discover/movie?sort_by=popularity.desc';
  theathers :string = 'discover/movie?primary_release_date.gte=2018-09-15&primary_release_date.lte=2018-10-22';
  kids : string = 'discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc';
  drama : string = 'discover/movie?with_genres=18&primary_release_year=2018';
  authentication:string = '&api_key=';
  movie : string = 'movie/';
  atutenticationMovie : string = '?api_key=';

  constructor(private http : HttpClient) { }

  getPopular(){
    return this.http.get(this.path+this.popular+this.authentication+this.apiKey)
  }
  getMovie(id){
    return this.http.get(this.path+this.movie+id+this.atutenticationMovie+this.apiKey)
  }

}
