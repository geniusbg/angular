import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SportsComponent } from './sports/sports.component';
import { ShowsportComponent } from './showsport/showsport.component';

const routes: Routes = [
  { path: '', component: SportsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
