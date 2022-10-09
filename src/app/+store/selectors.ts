import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as fromRick from './reducers';


export const selectRickState = createFeatureSelector<fromRick.State>(
    fromRick.RickFeatureKey
);

export const getPageNum = createSelector(
    selectRickState,
    (state: fromRick.State) => state.pageNum
);

export const getInfo = createSelector(
    selectRickState,
    (state: fromRick.State) => state.info
)

export const loadCharacters = createSelector(
    selectRickState,
    (state: fromRick.State) => state.characters
);

export const loadSingleCharacter = createSelector(
    selectRickState,
    (state: fromRick.State) => state.character
);

export const loadEpisodes = createSelector(
    selectRickState,
    (state: fromRick.State) => state.episodes
)