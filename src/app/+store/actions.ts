import { createAction, props } from '@ngrx/store';

import { Character } from '../models/CharactersResponse';
import { Episode } from '../models/EpisodesResponse';


export const getAllCharacters = createAction(
    '[Character-list Component] get all characters',
    props<{ pageNum: number }>()
);

export const getAllCharactersSuccess = createAction(
    '[Character-list Component] get all characters success',
    props<{ characters: Character[], info: Object }>()
);

export const getAllCharactersError = createAction(
    '[Character-list Component] get all characters error',
    props<{ error: any }>()
);

export const getSingleCharacter = createAction(
    '[Character-list Component] get single character',
    props<{ id: number }>()
);

export const getSingleCharacterSuccess = createAction(
    '[Character-list Component] get single character success',
    props<{ character: Character }>()
);

export const getSingleCharacterError = createAction(
    '[Character-list Component] get single character error',
    props<{ error: any }>()
);

export const getAllEpisodes = createAction(
    '[Character-list Component] get all episodes',
    props<{ pageNum: number }>()
);

export const getAllEpisodesSuccess = createAction(
    '[Character-list Component] get all episodes success',
    props<{ episodes: Episode[], info: Object }>()
);

export const getAllEpisodesError = createAction(
    '[Character-list Component] get all episodes error',
    props<{ error: any }>()
);