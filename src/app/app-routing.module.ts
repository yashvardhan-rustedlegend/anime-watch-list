import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddMovieComponent } from './components/add-movie/add-movie.component';

import { WatchListComponent } from './components/watch-list/watch-list.component';

const routes: Routes = [
  {path:"List" ,component:WatchListComponent},
  {path:"Add Anime" , component:AddMovieComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }