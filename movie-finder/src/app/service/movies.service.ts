import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const apiKey = '5c0f1ab80ce144114982f5aac8c5da57';


@Injectable({
  providedIn: 'root'
})


export class MoviesService {
  path: string = 'https://api.themoviedb.org/3/';
  popular: string = 'discover/movie?sort_by=popularity.desc';
  theaters: string = 'discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22'
  kids: string = 'discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc'
  drama: string = 'discover/movie?with_genres=18&sort_by=vote_average.desc&vote_count.gte=10'
  authentication: string = '&api_key=';
  findMovieById: string = 'movie/'
  movieAuth: string = '?api_key='

  constructor(private http: HttpClient) { }

  getPopular() {
    return this.http.get(this.path + this.popular + this.authentication + apiKey)
  }

  getTheaters() {
    return this.http.get(this.path + this.theaters + this.authentication + apiKey)
  }

  getKids() {
    return this.http.get(this.path + this.kids + this.authentication + apiKey)
  }

  getDrama() {
    return this.http.get(this.path + this.drama + this.authentication + apiKey)
  }

  getMovie(id : string) {
    return this.http.get(this.path + this.findMovieById + id + this.movieAuth + apiKey)
  }
}
