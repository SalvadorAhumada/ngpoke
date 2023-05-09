import { createReducer, on } from "@ngrx/store";
import { IPokemonData } from "src/app/shared/interfaces/pokemon";
import * as PokemonActions from './actions/pokemon.actions';
import * as AppState from '../../state/app.state';
import { IPokemonDetails, IPokemonSprites } from "src/app/shared/interfaces/pokemonDetail";

export interface PokemonState extends AppState.State {
    pokemons: IPokemonData[],
    error: string,
    selectedPokemon: IPokemonDetails
}

const initialState: PokemonState = {
    pokemons: [],
    error: '',
    selectedPokemon: {
        id: 0,
        weight: 0,
        stats: [],
        moves: [],
        height: 0,
        abilities: [],
        types: [],
        sprites: {} as IPokemonSprites,
        name: ''
    }
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
            pokemons: [],
            error: action.error
        }
    }),
    on(PokemonActions.loadSelectedPokemon, (state: PokemonState, action) => {
        return {
            ...state,
            selectedPokemon: action.selectedPokemon
        }
    }),
);
