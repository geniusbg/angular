import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-showsport',
  templateUrl: './showsport.component.html',
  styleUrls: ['./showsport.component.css']
})
export class ShowsportComponent implements OnInit {
@ Input() sportId;
  constructor() { }

  ngOnInit() {
  }

}
