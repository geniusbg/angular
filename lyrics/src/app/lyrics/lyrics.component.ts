import { Component, OnInit } from '@angular/core';
import { LyricsService } from '../lyrics.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lyrics',
  templateUrl: './lyrics.component.html',
  styleUrls: ['./lyrics.component.css']
})
export class LyricsComponent implements OnInit {
  lyric: any

  constructor(private lyrics: LyricsService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.artist != undefined && params.title != undefined) {
        this.lyrics.getLyrics(params.artist, params.title).subscribe(data => {
          this.lyric = data;
        })
      }
    })
  }
  getLyrics(params) {
    this.router.navigateByUrl(`/lyrics/${params.artist}/${params.title}`)
  }

}
