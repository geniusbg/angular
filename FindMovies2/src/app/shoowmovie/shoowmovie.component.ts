import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-showmovie',
  templateUrl: './shoowmovie.component.html',
  styleUrls: ['./shoowmovie.component.css']
})
export class ShoowmovieComponent implements OnInit {
  @ Input() movie:any;
  
  constructor() { }

  ngOnInit() {
  
  }

}
