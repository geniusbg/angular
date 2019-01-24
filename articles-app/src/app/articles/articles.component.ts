import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Article } from '../models/article.model';
import { ArticleData } from '../data/data';


@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  
  articles: Article []
  title: string;
  constructor() { }
  ngOnInit() {
    this.articles = new ArticleData().getData();
  }
  sendevent(eventFromChild){
    let temp: string = eventFromChild
    if(temp == this.title){
      this.title = null
    }
    else{
      this.title = eventFromChild;
    }
  }
}
