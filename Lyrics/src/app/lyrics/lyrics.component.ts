import { Component, OnInit } from '@angular/core';
import { LyricsService } from '../lyrics.service'
import { ActivatedRoute, RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-lyrics',
  templateUrl: './lyrics.component.html',
  styleUrls: ['./lyrics.component.css']
})
export class LyricsComponent implements OnInit {
  lyrics: Object;

  constructor(private service: LyricsService, private route: ActivatedRoute,
    private router: Router) { }
  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.artist != undefined && params.title != undefined) {
        this.service.getLyrics(params.artist, params.title).subscribe(data => {
          this.lyrics = data;
        })
      }
    })
  }
  getLyrics(params) {
    this.router.navigateByUrl(`/lyrics/${params.artist}/${params.title}`)
  }
}
