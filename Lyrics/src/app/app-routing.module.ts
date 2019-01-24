import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LyricsComponent } from './lyrics/lyrics.component';
import { DiscographyComponent } from './discography/discography.component';
import { AlbumComponent } from './album/album.component';

const routes: Routes = [
  { path: '', component: DiscographyComponent },
  { path: 'lyrics', component: LyricsComponent },
  { path: 'lyrics/:artist/:title', component: LyricsComponent },
  { path: 'album/:artist/:album', component: AlbumComponent },
  { path: '**', component: DiscographyComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
