import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IPokemonDetails } from '../../shared/interfaces/pokemonDetail';
import { Store } from '@ngrx/store';
import { State } from '../state';
import { Observable } from 'rxjs';
import { PokemonService } from 'src/app/pokemon.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent {
  

  constructor(private pokemonService: PokemonService, private route: ActivatedRoute, private router: Router, private store: Store<State>) { 
    
    this.routeSubscription = this.route.paramMap.subscribe(params => {
      let pokemon = params.get('pokemon');

      if(pokemon === 'search') {
        pokemon = this.route.snapshot.queryParamMap.get('pokemon');
      }
      
      this.pokemon = pokemon;
    });

    this.fetchPokemonData();
  }

  fetchPokemonData():void {
      this.selectedPokemon$ = this.pokemonService.getPokemonDetail(this.pokemon);
  }

  routeSubscription?: Subscription;

  panelOpenState: boolean = false;

  pokemon: string | null = '';

  selectedPokemon$!: Observable<IPokemonDetails>;

  pokemonDetail:IPokemonDetails | undefined;

  showPokemonDetails(pokemon: IPokemonDetails): string {
    return JSON.stringify(pokemon, null, 4)
  }

  showPokemonImg(pokemon: IPokemonDetails): string {
    if(pokemon.id > 0 && pokemon.sprites.other) return pokemon.sprites.other["official-artwork"]["front_default"]
    return 'not_found.png';
  }

  goBack():void {
    this.router.navigate(['../']);
  }
}
