import { Component, HostListener, OnInit } from '@angular/core';
import { PokemonService } from '../../pokemon.service';
import { IPokemon } from '../../shared/interfaces/pokemon';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as PokemonActions from '../state/pokemon.actions';
import { State, getPokemons } from '../state/pokemon.reducer';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})

export class PokemonListComponent implements OnInit {

  constructor(private pokemonService: PokemonService, route: Router, private store: Store<State>) {

    const state = route.getCurrentNavigation();

    if (state?.previousNavigation) this.loading = false;

  }
  title: string = 'ngPokemon';
  errorMessage: string = '';
  loading: boolean = true;
  pokemons: IPokemon[] = [];
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

    this.store.dispatch(PokemonActions.loadPokemons());

    this.store.select(getPokemons).subscribe(
      pokemons => {
        if(pokemons) {
          this.pokemons = pokemons;
        }  
      }
    )
  }

  @HostListener('window:load', ['$event']) onDocumentLoad(_event: Event) {
    this.loading = false;
  }
}
