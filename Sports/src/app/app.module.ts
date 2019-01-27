//module
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//components
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SportsComponent } from './sports/sports.component';

//services
import { ListService } from './services/list.service';
import { NavbarComponent } from './navbar/navbar.component';
import { LivescoresComponent } from './livescores/livescores.component';
import { LivescoresService } from './services/livescores.service';
import { GoalsPipe } from './pipes/goals.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SportsComponent,
    NavbarComponent,
    LivescoresComponent,
    GoalsPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [ListService, LivescoresService],
  bootstrap: [AppComponent]
})
export class AppModule { }
