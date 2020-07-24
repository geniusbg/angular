import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SportsComponent } from './sports/sports.component';
import { LeaguesComponent } from './components/leagues/leagues.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "sports", component: SportsComponent},
  {path: "sports/:id", component: LeaguesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
