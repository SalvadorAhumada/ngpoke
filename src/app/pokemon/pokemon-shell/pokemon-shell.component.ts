import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { State, getPokemons, getError } from '../state';
import * as PokemonActions from '../state/actions/pokemon.actions';
import { IPokemon } from '../../shared/interfaces/pokemon';
import { PokemonService } from '../../pokemon.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokemon-shell',
  templateUrl: './pokemon-shell.component.html'
})
export class PokemonShellComponent {

  constructor(private pokemonService: PokemonService, route: Router, private store: Store<State>) {

    const state = route.getCurrentNavigation();
    
    if (state?.previousNavigation) this.loading = false; 

  }

  errorMessage: string = '';
  loading: boolean = true;
  pokemons$!: Observable<IPokemon[]>;
  errorMsg$!: Observable<any>;

  getSprite = (i: number):string => {
    const isLocal: boolean = this.pokemonService.getPokemonSpriteUrl();
    return isLocal === true ? "assets/img/loader.gif" : `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${i + 1}.png`;
  }

  checkLoading():void {
    this.loading = !this.loading;
  }

  getPokemonLink(pokemon: IPokemon): string {

    return `/pokedex/${encodeURIComponent(
      pokemon.name.toLocaleLowerCase()
    )}`;
  }

  ngOnInit(): void {

    this.errorMsg$ = this.store.select(getError);

    this.store.dispatch(PokemonActions.loadPokemons());

    this.pokemons$ = this.store.select(getPokemons);
  }
}