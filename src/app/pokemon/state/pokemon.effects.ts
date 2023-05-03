import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { PokemonService } from "../../pokemon.service";
import * as PokemonActions from './pokemon.actions';
import { mergeMap, map, catchError, of } from "rxjs";

@Injectable()
export class PokemonEffects {
    constructor(private actions$: Actions, private pokemonService: PokemonService){} 
    
    loadPokemons$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(PokemonActions.loadPokemons),
            mergeMap(()=> this.pokemonService.getPokemons().pipe(
                map(pokemons => PokemonActions.loadPokemonsSuccess({ pokemons })),
                catchError(error => of(PokemonActions.loadPokemonsError({ error })))
            ))
        )
    })
}