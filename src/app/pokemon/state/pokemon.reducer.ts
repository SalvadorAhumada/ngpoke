import { createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import * as PokemonActions from './pokemon.actions';
import { IPokemon } from "src/app/shared/interfaces/pokemon";
import * as AppState from '../../state/app.state';

export interface State extends AppState.State {
    pokemons: PokemonState
}

export interface PokemonState extends AppState.State {
    pokemons: IPokemon[],
    error: string
}

const initialState: PokemonState = {
    pokemons:[],
    error:''
}

const getPokemosFeatureState = createFeatureSelector<PokemonState>('pokemons');

export const getPokemons = createSelector(
    getPokemosFeatureState,
    state => state.pokemons
)

export const pokemonReducer = createReducer<PokemonState>(
    initialState,
    on(PokemonActions.loadPokemonsSuccess, (state: PokemonState, action) => {
        return {
            ...state,
            pokemons: action.pokemons,
            error: ''
        }
    }),
    on(PokemonActions.loadPokemonsError, (state: PokemonState, action) => {
        return {
            ...state,
            pokemons:[],
            error: action.error
        }
    })
);

export const getError = createSelector(
    getPokemosFeatureState,
    state => state.error
)