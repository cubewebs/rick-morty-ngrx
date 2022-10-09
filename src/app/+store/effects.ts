
import { Injectable } from '@angular/core';
import { concatLatestFrom } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError, concatMap, tap, switchMap } from 'rxjs/operators';
import { CharactersService } from '../services/characters.service'
import * as RickActions from '../+store/actions';
import { CharacterService } from '../services/character.service';
import { EpisodesService } from '../services/episodes.service';
 
@Injectable()
export class RickEffects {
    
 
  getAllCharacters$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RickActions.getAllCharacters),
      mergeMap((action) => this.charactersService.getCharacters(action.pageNum)
        .pipe(
            map((data) => RickActions.getAllCharactersSuccess({characters: data.results, info: data.info})),
            catchError(error => of(RickActions.getAllCharactersError({ error})))
        )
      )
    )
  );

  getSingleCharacter$ = createEffect(() => 
            this.actions$.pipe(
                ofType(RickActions.getSingleCharacter),
                switchMap((action) => this.characterService.getSingleCharacter(action.id)
                .pipe(
                    map((data) => RickActions.getSingleCharacterSuccess({character: data})),
                    catchError(error => of(RickActions.getSingleCharacterError({error})))
                ))
            )
  );

  getAllEpisodes$ = createEffect(() => 
                  this.actions$.pipe(
                    ofType(RickActions.getAllEpisodes),
                    switchMap(action => this.episodesService.getAllEpisodes(action.pageNum)
                      .pipe(
                        map(data => RickActions.getAllEpisodesSuccess({episodes: data.results, info: data.info})),
                        catchError(error => of(RickActions.getAllEpisodesError({ error })))
                      ))
                  )
  );
                  
  constructor(
    private actions$: Actions,
    private charactersService: CharactersService,
    private characterService: CharacterService,
    private episodesService: EpisodesService,
    private store: Store
  ) {}
}