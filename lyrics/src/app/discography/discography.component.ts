import { Component, OnInit } from '@angular/core';
import { LyricsService } from '../lyrics.service'

@Component({
  selector: 'app-discography',
  templateUrl: './discography.component.html',
  styleUrls: ['./discography.component.css']
})
export class DiscographyComponent implements OnInit {

  constructor(private lyricsService: LyricsService) { }
  artist: any;
  albums: any;

  ngOnInit() {
  }

  getArtist(params) {
    this.lyricsService.getArtist(params.artist).subscribe(data => {
      this.artist = data
      this.artist = this.artist.artists[0]
      console.log(this.artist)
    })
  }

  getArtistAlbums(params){
    this.lyricsService.getArtistAlbums(params.artist).subscribe(data => {
      this.albums = data
      this.albums = this.albums.album
      console.log(this.albums)
    })
  }

}
