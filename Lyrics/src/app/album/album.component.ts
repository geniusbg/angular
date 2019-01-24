import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LyricsService } from '../lyrics.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
  album: any
  constructor(private service: LyricsService, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {

      console.log(params)
        this.service.getAlbumDetails(params.artist, params.album).subscribe(data => {
          this.album = data;
          console.log(data)
        })
      
    })
  }
}
