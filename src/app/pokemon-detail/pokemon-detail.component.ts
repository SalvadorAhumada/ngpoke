import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../pokemon.service';
import { IPokemonDetails } from '../pokemonDetail';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private pokemonService: PokemonService) { }

  name = '';

  pokemonDetail:IPokemonDetails | undefined;

  ngOnInit(): void {
    this.route.params.subscribe(({ pokemonName }) => {
      this.name = pokemonName;
      this.pokemonService.getPokemonDetail(pokemonName).subscribe(response => {
        this.pokemonDetail = response;
      });
    });
  }
}
