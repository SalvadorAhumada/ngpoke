import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';
import { IResponsePokemon } from './shared/interfaces/responsePokemon';
import { IPokemonData } from './shared/interfaces/pokemon';
import { IPokemonDetails } from './shared/interfaces/pokemonDetail';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class PokemonService {

  private url = environment.fakeApi === true ? "fakeApi/pokemons/pokemons.json" : "https://pokeapi.co/api/v2/pokemon?limit=150&amp;offset=200"
  
  constructor(private http: HttpClient) { }

  private handleError(err: HttpErrorResponse) {
    let errorMsg = '';

    if (err.error instanceof ErrorEvent) {
      errorMsg = `An error ocurred ${err.error.message}`;
    } else {
      errorMsg = `Server returned code ${err.status}, error message is: ${err.message}`
    }
    console.log(errorMsg)
    return throwError(() => errorMsg)
  }

  getPokemonSpriteUrl(): boolean {
    return environment.fakeApi;
  }

  getPokemons(): Observable<IPokemonData[]> {
    return this.http.get<IResponsePokemon>(this.url).pipe(
      map((data) => {
        return data.results;
      }),
      catchError(this.handleError)
    )
  }

  private getDetail(pokemonNo: number | string): string {
    return environment.fakeApi === true ? "fakeApi/pokemons/pokemonDetail.json" : `https://pokeapi.co/api/v2/pokemon/${pokemonNo}`
  }

  getPokemonDetail(pokemonNo: number | string): Observable<IPokemonDetails> {
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
      catchError(this.handleError)
    )
  }
}
