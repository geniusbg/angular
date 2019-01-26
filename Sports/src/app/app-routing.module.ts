import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SportsComponent } from './components/sports/sports.component';
import { ShowsportComponent } from './components/showsport/showsport.component';

const routes: Routes = [
  { path: '', component: SportsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
