import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, tap, throwError } from 'rxjs';
import { IResponsePokemon } from './responsePokemon';
import { IPokemon } from './pokemon';
import { IPokemonDetails } from './pokemonDetail';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  // private url = 'https://pokeapi.co/api/v2/pokemon?limit=5&amp;offset=200';
  
  private url = 'fakeApi/pokemons/pokemons.json';

  private detailPokemon = 'fakeApi/pokemon/pokemonDetail.json';
  
  // private detailUrl = 'https://pokeapi.co/api/v2/pokemon/';

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

  getPokemons(): Observable<IPokemon[]> {
    return this.http.get<IResponsePokemon>(this.url).pipe(
      map((data) => {
        return data.results;
      }),
      catchError(this.handleError)
    )
  }

  getPokemonDetail(_name: string): Observable<IPokemonDetails> {
    return this.http.get<any>(this.detailPokemon).pipe(
      map((data) => {
        
        return { 
          id: data.id,
          weight: data.weight,
          stats: data.stats,
          moves: data.moves,
          height: data.height,
          abilities: data.abilities,
          type: data.type
        }

      }),
      catchError(this.handleError)
    )
  }
}
