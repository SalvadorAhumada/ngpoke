import {  Component, Input, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/pokemon.service';
import { IPokemon } from 'src/app/shared/interfaces/pokemon';
import { IPokemonDetails } from 'src/app/shared/interfaces/pokemonDetail';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css'],
})
export class PokemonCardComponent implements OnInit {
  constructor(private pokemonService: PokemonService) {}

  getClass(): string {
    return `type_${this.pokemonDetails.types[0].type.name}`;
  }

  @Input()pokemon!: IPokemon
  @Input()getSprite!: Function;
  @Input()getPokemonLink!: Function;
  @Input()pokemonNo!: number;
  pokemonDetails!: IPokemonDetails;

  ngOnInit(): void {
    this.pokemonService.getPokemonDetail(this.pokemonNo).subscribe(response => {  
      this.pokemonDetails = response; 
    });
  }
}

