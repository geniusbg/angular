import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LyricsComponent } from './lyrics/lyrics.component';
import { DiscographyComponent } from './discography/discography.component';
import { HttpClientModule } from '@angular/common/http';
import { LyricsService } from './lyrics.service';
import { FormsModule }   from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LyricsComponent,
    DiscographyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [LyricsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
