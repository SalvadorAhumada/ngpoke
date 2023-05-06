import { createReducer, on } from "@ngrx/store";
import { IPokemonData } from "src/app/shared/interfaces/pokemon";
import * as PokemonActions from './actions/pokemon.actions';
import * as AppState from '../../state/app.state';

export interface PokemonState extends AppState.State {
    pokemons: IPokemonData[],
    error: string
}

const initialState: PokemonState = {
    pokemons:[],
    error:''
}

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
