import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, tap, throwError } from 'rxjs';
import { IResponsePokemon } from './responsePokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private url = 'https://pokeapi.co/api/v2/pokemon?limit=10&amp;offset=200';

  constructor(private http: HttpClient) { }

  private handleError(err: HttpErrorResponse) {
    let errorMsg = '';

    if(err.error instanceof ErrorEvent) {
        errorMsg = `An error ocurred ${err.error.message}`;
    } else {
        errorMsg = `Server returned code ${err.status}, error message is: ${err.message}`
    }
    console.log(errorMsg)
    return throwError(()=> errorMsg)
}

  getPokemons(): Observable<IResponsePokemon> {
    return this.http.get<IResponsePokemon>(this.url).pipe(
      map((data)=> {
        return data;
      }),
      catchError(this.handleError)
    )
}
}
