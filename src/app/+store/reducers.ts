import { createReducer, on } from '@ngrx/store';
import * as RickActions from '../+store/actions';
import { Character, Info } from '../models/CharactersResponse';
import { Episode } from '../models/EpisodesResponse';

export const RickFeatureKey = 'rick-morty';


const InfoInitialState: Info = {
    count: 0,
    pages: 0,
    next:  '',
    prev:  '',
}

const CharacterInitialState: Character = {
            id:        0,
            name:      '',
            status:    '',
            species:   '',
            type:      '',
            gender:    '',
            origin:    {name: '', url: ''},
            location:  {name: '', url: ''},
            image:     '',
            episode:   [],
            url:       '',
            created:   new Date,
}

const EpisodeInitialState: Episode = {
  id:         0,
  name:       '',
  air_date:   '',
  episode:    '',
  characters: [],
  url:        '',
  created:    new Date,
}

export interface State {
    pageNum:    number;
    info: Info;
    characters: Character[];
    id: number;
    character: Character;
    episodes: Episode[];
}

export const initialState = {
    pageNum: 1,
    info: {},
    characters: [CharacterInitialState],
    id: 0,
    character: CharacterInitialState,
    episodes: [EpisodeInitialState],
}

export const RickReducer = createReducer(
  initialState,
  on(RickActions.getAllCharacters, (state, action) => {
    return { ...state, pageNum: action.pageNum }
  }),
  on(RickActions.getAllCharactersSuccess, (state, action) => {
    return { ...state, characters: action.characters, info: action.info }
  }),
  on(RickActions.getAllCharactersError, (state, action) => {
    return { ...state, error: action.error }
  }),
  on(RickActions.getSingleCharacter, (state, action) => {
    return { ...state, id: action.id }
  }),
  on(RickActions.getSingleCharacterSuccess, (state, action) => {
    return { ...state, character: action.character }
  }),
  on(RickActions.getSingleCharacterError, (state, action) => {
    return { ...state, error: action.error }
  }),
  on(RickActions.getAllEpisodes, (state, action) => {
    return { ...state, pageNum: action.pageNum }
  }),
  on(RickActions.getAllEpisodesSuccess, (state, action) => {
    return { ...state, episodes: action.episodes, info: action.info }
  }),
  on(RickActions.getAllEpisodesError, (state, action) => {
    return { ...state, error: action.error }
  }),
);

