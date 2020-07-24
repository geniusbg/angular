import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DiscographyComponent } from './discography/discography.component';
import { LyricsComponent } from './lyrics/lyrics.component';

const routes: Routes = [
  {path: "", component: DiscographyComponent},
  {path: "lyrics/:artist/:title", component: LyricsComponent},
  {path: "lyrics", component: LyricsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
