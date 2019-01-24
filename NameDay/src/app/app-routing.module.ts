import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HelloComponent } from './hello/hello.component';
import { TodayComponent } from './today/today.component';
import { SearchByNameComponent } from './search-by-name/search-by-name.component';

const routes: Routes = [
  {path: "", component: HelloComponent},
  {path: "today", component: TodayComponent},
  {path: "searchbyname", component: SearchByNameComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
