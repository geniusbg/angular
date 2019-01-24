import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms'
 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { LyricsComponent } from './lyrics/lyrics.component';
import { LyricsService } from './lyrics.service';
import { DiscographyComponent } from './discography/discography.component';
import { AlbumComponent } from './album/album.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LyricsComponent,
    DiscographyComponent,
    AlbumComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [LyricsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
