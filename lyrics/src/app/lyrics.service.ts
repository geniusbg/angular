import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class LyricsService {

  constructor(private http: HttpClient) { }

  getLyrics(artist: string, title: string) {
    return this.http.get(`https://api.lyrics.ovh/v1/${artist}/${title}`)
  }

  getArtist(artist: string) {
    return this.http.get(`https://theaudiodb.com/api/v1/json/1/search.php?s=${artist}`)
  }

  getArtistAlbums(artist: string){
    return this.http.get(`https://theaudiodb.com/api/v1/json/1/searchalbum.php?s=${artist}`)
  }
}
