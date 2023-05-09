import { createFeatureSelector, createSelector } from "@ngrx/store";
import * as AppState from '../../state/app.state';
import { PokemonState } from "./pokemon.reducer";

export interface State extends AppState.State {
    pokemons: PokemonState
}

const getPokemosFeatureState = createFeatureSelector<PokemonState>('pokemons');

export const getPokemons = createSelector(
    getPokemosFeatureState,
    state => state.pokemons
)

export const getError = createSelector(
    getPokemosFeatureState,
    state => state.error
)

export const getSelectedPokemon = createSelector(
    getPokemosFeatureState,
    state => state.selectedPokemon
)
