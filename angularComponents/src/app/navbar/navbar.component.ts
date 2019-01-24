import { Component, Input } from '@angular/core'
import { Article } from 'src/domain/article';

@Component ({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})

export class NavbarComponent {
  @Input('articles') articles: Article;
}