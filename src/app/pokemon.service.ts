import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';
import { IResponsePokemon } from './shared/interfaces/responsePokemon';
import { IPokemonData } from './shared/interfaces/pokemon';
import { IPokemonDetails } from './shared/interfaces/pokemonDetail';
import { environment } from '../environments/environment';
import { Store } from '@ngrx/store';
import { State, getError } from '../app/pokemon/state';
import * as PokemonActions from '../app/pokemon/state/actions/pokemon.actions';

@Injectable({
  providedIn: 'root'
})

export class PokemonService {

  private url = environment.fakeApi === true ? "fakeApi/pokemons/pokemons.json" : "https://pokeapi.co/api/v2/pokemon?limit=150&amp;offset=200"
    constructor(private http: HttpClient, private store: Store<State>) { }

  errorMsg: string = '';

  private handleError(err: HttpErrorResponse, isSearch: boolean = false) {
    if(isSearch) {
      this.errorMsg = `No Pokémon found`;
    } else {
      if (err.error instanceof ErrorEvent) {
        this.errorMsg = `An error ocurred ${err.error.message}`;
      } else {
        this.errorMsg = `Server returned code ${err.status}, error message is: ${err.message}`
      }
    }
    this.getErrorIfExist();
    return throwError(() => this.errorMsg)
  }

  getErrorIfExist(): void {
    this.store.dispatch(PokemonActions.loadPokemonsError({error: this.errorMsg}));
  }

  getPokemonSpriteUrl(): boolean {
    return environment.fakeApi;
  }

  getPokemons(): Observable<IPokemonData[]> {
    return this.http.get<IResponsePokemon>(this.url).pipe(
      map((data) => {
        return data.results;
      }),
      catchError((err) => this.handleError(err))
    )
  }

  private getDetail(pokemonNo: number | string  | null): string {
    return environment.fakeApi === true ? "fakeApi/pokemons/pokemonDetail.json" : `https://pokeapi.co/api/v2/pokemon/${pokemonNo}`
  }

  getPokemonDetail(pokemonNo: number | string | null, isSearch: boolean = false): Observable<IPokemonDetails> {
    return this.http.get<any>(this.getDetail(pokemonNo)).pipe(
      map((data) => {
        return { 
          id: data.id,
          weight: data.weight,
          stats: data.stats,
          moves: data.moves,
          height: data.height,
          abilities: data.abilities,
          types: data.types,
          sprites: data.sprites,
          name: data.name
        }

      }),
      catchError((err) => this.handleError(err, isSearch))
    )
  }
}
