import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterListComponent } from './rick-morty/character-list/character-list.component';
import { CharacterComponent } from './rick-morty/character/character.component';
import { EpisodeListComponent } from './rick-morty/episode-list/episode-list.component';

const routes: Routes = [
  {
    path: 'character-list',
    component: CharacterListComponent
  },
  {
    path: 'character/:id',
    component: CharacterComponent
  },
  {
    path: 'episode-list',
    component: EpisodeListComponent
  },
  {
    path: '**',
    redirectTo: 'character-list',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
