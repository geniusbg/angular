import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { MoviesService } from './service/movies.service';
import {HttpClientModule} from '@angular/common/http';
import { MovieComponent } from './movie/movie.component'
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    MovieComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: '',component : MoviesComponent},
      {path: 'movie/:id', component: MovieComponent}
    ])
  ],
  providers: [MoviesService],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
