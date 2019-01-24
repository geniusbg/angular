import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Article } from 'src/domain/article';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.css']
})
export class SubscribeComponent implements OnInit {
 @Input('article') article: Article
 @Output('textToDisplay') titlePicked: EventEmitter<any> = new EventEmitter<any>();
 clickedButton(id :number): void{
   this.titlePicked.emit(this.article.content)
   console.log(this.article.content)
   
 }
 
 constructor() { }

  ngOnInit() {
  }

}
