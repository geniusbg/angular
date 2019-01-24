import { Component, OnInit, Input } from '@angular/core';
import { Article } from 'src/domain/article';
import { ArticleSevice } from '../article.service'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  @Input('articles') 
  articles: Article;
  messageFromSevice: string;
  articlesFromService
  constructor(private articleSevice :  ArticleSevice ) {
    this.messageFromSevice = articleSevice.getArticle();
    this.articlesFromService = articleSevice.getArticles();
   }
  
  ngOnInit() {

  }

}
