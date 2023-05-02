import { Component, HostListener, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { EMPTY, Observable, catchError } from 'rxjs';
import { IPokemon } from '../shared/interfaces/pokemon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})

export class PokemonListComponent implements OnInit {

  constructor(private pokemonService: PokemonService, route: Router) {

    const state = route.getCurrentNavigation();

    if (state?.previousNavigation) this.loading = false;

  }
  title: string = 'ngPokemon';
  errorMessage: string = '';
  loading: boolean = true;
  pokemons$: Observable<IPokemon[]> | undefined;
  errorMsg = '';
  
  getSprite(i: number): string {
    const isLocal: boolean = this.pokemonService.getPokemonSpriteUrl();
    return isLocal === true ? "assets/img/loader.gif" : `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${i+1}.png`;
  }

  getPokemonLink(pokemon: IPokemon):string {

    return `/pokedex/${
      encodeURIComponent(
        pokemon.name.toLocaleLowerCase()
      )}`;
  }

  ngOnInit(): void {

    this.pokemons$ = this.pokemonService.getPokemons().pipe(
      catchError((err) => {
        this.errorMsg = err;
        return EMPTY;
      })
    )
  }

  @HostListener('window:load', ['$event']) onDocumentLoad(_event: Event) {
    this.loading = false;
  }
}
