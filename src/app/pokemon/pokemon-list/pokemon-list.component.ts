import { Component, HostListener, OnInit } from '@angular/core';
import { PokemonService } from '../../pokemon.service';
import { IPokemon } from '../../shared/interfaces/pokemon';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as PokemonActions from '../state/pokemon.actions';
import { State, getPokemons, getError } from '../state/pokemon.reducer';
import { Observable } from 'rxjs';

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
  pokemons$!: Observable<IPokemon[]>;
  errorMsg$!: Observable<any>;
  
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

    this.errorMsg$ = this.store.select(getError);

    this.store.dispatch(PokemonActions.loadPokemons());

    this.pokemons$ = this.store.select(getPokemons);
  }

  @HostListener('window:load', ['$event']) onDocumentLoad(_event: Event) {
    this.loading = false;
  }
}
