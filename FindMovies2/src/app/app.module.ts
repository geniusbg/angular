import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieComponent } from './movie/movie.component';
import {GetmoviesService} from './getmovies.service'
import { HttpClientModule } from '@angular/common/http';
import {RouterModule} from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { ShoowmovieComponent } from './shoowmovie/shoowmovie.component'

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    MovieComponent,
    NavComponent,
    ShoowmovieComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:'', component: MoviesComponent},
      {path:'movie/:id', component: MovieComponent}
    ])
  ],
  providers: [GetmoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
