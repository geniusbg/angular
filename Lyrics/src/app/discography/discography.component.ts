import { Component, OnInit } from '@angular/core';
import { LyricsService } from '../lyrics.service';
import { ActivatedRoute, RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-discography',
  templateUrl: './discography.component.html',
  styleUrls: ['./discography.component.css']
})
export class DiscographyComponent implements OnInit {

  artist: any;
  albums: any;
  constructor(private http: LyricsService) { }

  ngOnInit() {

  }

  getArtist(params) {
    this.http.getArtist(params.artist).subscribe(data => {
      this.artist = data;
      //check if artist exists
      if (this.artist.artists) {
        this.artist = this.artist.artists[0];
       

        this.http.getArtistAlbums(params.artist).subscribe(data => {
          this.albums = data;
          this.albums = this.albums.album;

          console.log(this.albums)
        })
      }
      else {
        this.artist = { strArtist: 'No artist found:' }
      }
    })

  }
}
