import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollingModule } from '@angular/cdk/scrolling';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { RickMortyRoutingModule } from './rick-morty-routing.module';
import { CharacterListComponent } from './character-list/character-list.component';
import { CharacterListPipe } from './pipes/character-list.pipe';
import { CharacterComponent } from './character/character.component';
import { RickFeatureKey, RickReducer } from '../+store/reducers';
import { EpisodeListComponent } from './episode-list/episode-list.component';


@NgModule({
  declarations: [
    CharacterListComponent,
    CharacterListPipe,
    CharacterComponent,
    EpisodeListComponent
  ],
  imports: [
    CommonModule,
    RickMortyRoutingModule,
    StoreModule.forFeature(RickFeatureKey, RickReducer),
    ScrollingModule,
  ],
  exports: [
    CharacterListComponent
  ]
})
export class RickMortyModule { }
