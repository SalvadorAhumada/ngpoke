import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Navigation, Router } from '@angular/router';
import { IPokemonDetails } from '../../shared/interfaces/pokemonDetail';
import { Store } from '@ngrx/store';
import { State, getSelectedPokemon } from '../state';
import { Observable } from 'rxjs';
import { PokemonService } from 'src/app/pokemon.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent implements OnInit {
  

  constructor(private pokemonService: PokemonService, private route: ActivatedRoute, private router: Router, private store: Store<State>) { 
    this.fetchPokemonData(this.router);
  }

  fetchPokemonData(router: Router):void {

    const navigatedFromMain = router.getCurrentNavigation()?.previousNavigation;

    if(navigatedFromMain) {
      this.selectedPokemon$ = this.store.select(getSelectedPokemon);
    } else {
      this.selectedPokemon$ = this.pokemonService.getPokemonDetail('Pikachu');
    }
  }

  panelOpenState = false;

  name = '';

  selectedPokemon$!: Observable<IPokemonDetails>;

  pokemonDetail:IPokemonDetails | undefined;

  showPokemonDetails(pokemon: IPokemonDetails): string {
    return JSON.stringify(pokemon, null, 4)
  }

  showPokemonImg(pokemon: IPokemonDetails): string {
    if(pokemon.id > 0 && pokemon.sprites.other) return pokemon.sprites.other["official-artwork"]["front_default"]
    return 'not_found.png';
  }

  ngOnInit(): void {
    
  }

  goBack():void {
    this.router.navigate(['../']);
  }
}
