import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IPokemonDetails } from '../../shared/interfaces/pokemonDetail';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent {

  constructor(private router: Router) { }

  name = '';

  pokemonDetail:IPokemonDetails | undefined;

  goBack():void {
    this.router.navigate(['../']);
  }
}
