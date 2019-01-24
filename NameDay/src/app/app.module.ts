import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodayComponent } from './today/today.component';
import { SerchComponent } from './serch/serch.component';
import { TomorrowComponent } from './tomorrow/tomorrow.component';
import { NavComponent } from './nav/nav.component';
import { GetdataService } from './getdata.service';
import {HttpClientModule} from '@angular/common/http';
import { SearchbynameComponent } from './searchbyname/searchbyname.component'
 
@NgModule({
  declarations: [
    AppComponent,
    TodayComponent,
    SerchComponent,
    TomorrowComponent,
    NavComponent,
    SearchbynameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [GetdataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
