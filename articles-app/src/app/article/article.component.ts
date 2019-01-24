import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Article } from '../models/article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  constructor() {
    this.articleDescLen = 0;
    this.descToShow = "";
  }

  ngOnInit() {
  }
  private symbols: number = 250;
  titleToSend: string;
  @Output() sendevent = new EventEmitter<string>();
  @Input() article: Article;
  @Input() articleDesc: string;
  descToShow: string;
  articleDescLen: number;
  showReadMoreBtn: boolean = true;
  showHideBtn: boolean = false;
  imageIsShown: boolean = false;
  imageBtnTitle: string = "Show image";

  sendTitle(articleTitle: string) {
    
    this.sendevent.emit(this.article.title);
    
  }
  readMore(): void {
    this.articleDescLen += this.symbols;
    if (this.articleDescLen >= this.article.description.length) {
      this.showReadMoreBtn = false
      this.showHideBtn = true
    }
    else {
      this.descToShow = this.article.description.substring(0, this.articleDescLen);
    }
  }
  hideDesc(): void {
    this.descToShow = "";
    this.articleDescLen = 0;
    this.showReadMoreBtn = true
    this.showHideBtn = false
  }


  toggleImage() {
    this.imageIsShown = !this.imageIsShown;
    if (this.imageIsShown) {
      this.imageBtnTitle === "Hide"
    }
    else {
      this.imageBtnTitle === 'Show'
    }
  }

}
