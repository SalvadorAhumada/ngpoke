import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PokemonSearchComponent } from '../pokemonSearch/pokemon-search/pokemon-search.component';
import { PokemonService } from 'src/app/pokemon.service';
import { Router } from '@angular/router';

@Component({
  selector: 'navbar',
  templateUrl: 'navbar.component.html',
  styleUrls: ['navbar.component.css'],
})

export class NavbarComponent {

  constructor(public dialog: MatDialog, private pokemonService: PokemonService, private router: Router) { }

  toSearch: string = '';
  openSearch(): void {
    const dialogRef = this.dialog.open(PokemonSearchComponent, {
      data: this.toSearch 
    });

    dialogRef.afterClosed().subscribe(pokemonName => {
      this.pokemonService.getPokemonDetail(pokemonName).subscribe(response => {  
        const queryParams = { pokemon: response.name.trim().toLowerCase() };
        this.router.navigate([`/pokedex/search`], { queryParams });
      });
    });
  }
}