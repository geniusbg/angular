import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContentComponent } from './content/content.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { ArticleSevice } from './article.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContentComponent,
    SubscribeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ArticleSevice],
  bootstrap: [AppComponent]
})
export class AppModule { }
