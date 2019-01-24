import { Component } from '@angular/core';

import { Article} from '../domain/article'
import { SubscribeComponent } from './subscribe/subscribe.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})
export class AppComponent {
  articles: Array<Article>
  
  doSomething($event){
    console.log('eventHadledByCousin')
  }
 
  constructor() {
   
    this.articles =   [{ id: 1,title: "First",content:'advczASDna'},
                       { id: 2,title: "Second",content:'aDsdFASdna'},
                       { id: 3,title: "Third",content:'adzxcvSDFDna'}]

  }    
  size = 16
  title = 'Angular';

}
