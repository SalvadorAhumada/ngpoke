import { createAction, props } from "@ngrx/store";
import { IPokemonData } from "src/app/shared/interfaces/pokemon";

export const loadPokemons = createAction(
    'GET_POKEMONS'
)

export const loadPokemonsSuccess = createAction(
    'GET_POKEMONS_SUCCESS',
    props<{ pokemons: IPokemonData[] }>()
)

export const loadPokemonsError = createAction(
    'GET_POKEMONS_ERROR',
    props<{ error: string }>()
)