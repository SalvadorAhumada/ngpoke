import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { Subscription } from 'rxjs';
import { IPokemon } from '../pokemon';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})

export class PokemonListComponent implements OnInit {
  constructor(private pokemonService: PokemonService) { }

  title: string = 'ngPokemon';
  sub!: Subscription;
  errorMessage: string = '';
  loading: boolean = true;
  pokemons: IPokemon[] = [];


  pageIsLoadedValidator(): void {
    window.addEventListener("load", () => {
        if (document.readyState == "complete") {
          this.loading = false;
        }
    });
  }

  ngOnInit(): void {
    this.sub = this.pokemonService.getPokemons().subscribe({
      next: pokemons => {
        this.pokemons = pokemons.results;
        this.pageIsLoadedValidator();
      },
      error: err => this.errorMessage = err
    })
  }
}
