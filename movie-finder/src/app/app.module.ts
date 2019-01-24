import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { MoviesService } from './service/movies.service'
import { HttpClientModule } from '@angular/common/http';
import { MovieComponent } from './movie/movie.component';
import {RouterModule, Routes} from '@angular/router';
import { AppRoutingModule } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    MovieComponent,
    // RouterModule
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
