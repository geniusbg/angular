import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  currentColor: string;
  @Output() colorChanged = new EventEmitter<string>();


  constructor() {
    this.currentColor = "white"
  }

  ngOnInit() {
  }
  colorSelected(x: string) {
    this.currentColor = x
    this.colorChanged.emit(this.currentColor)

  }

}
