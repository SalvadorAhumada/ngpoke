import { createReducer, on } from "@ngrx/store";
import * as PokemonActions from './pokemon.actions';
import { IPokemon } from "src/app/shared/interfaces/pokemon";
import * as AppState from '../../state/app.state';

const initialState = {};

export interface State extends AppState.State {
    pokemons: PokemonState
}

export interface PokemonState extends AppState.State {
    pokemons: IPokemon[]
}

export const pokemonReducer = createReducer<PokemonState>(
    initialState as PokemonState,
    on(PokemonActions.loadPokemonsSuccess, (state: PokemonState, action) => {
        return {
            ...state,
            pokemons: action.pokemons
        }
    })
);