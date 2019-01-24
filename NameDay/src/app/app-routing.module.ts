import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodayComponent } from './today/today.component';
import { TomorrowComponent } from './tomorrow/tomorrow.component';
import { SearchbynameComponent } from './searchbyname/searchbyname.component';

const routes: Routes = [
  {path : '', component : TodayComponent},
  {path : 'today', component : TodayComponent},
  {path : 'tomorrow', component : TomorrowComponent},
  {path : 'serchByName', component : SearchbynameComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
