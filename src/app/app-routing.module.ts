import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterListComponent } from './rick-morty/character-list/character-list.component';
import { CharacterComponent } from './rick-morty/character/character.component';

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
