import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RickMortyRoutingModule } from './rick-morty-routing.module';
import { CharacterListComponent } from './character-list/character-list.component';
import { CharacterListPipe } from './pipes/character-list.pipe';
import { CharacterComponent } from './character/character.component';


@NgModule({
  declarations: [
    CharacterListComponent,
    CharacterListPipe,
    CharacterComponent
  ],
  imports: [
    CommonModule,
    RickMortyRoutingModule
  ],
  exports: [
    CharacterListComponent
  ]
})
export class RickMortyModule { }
