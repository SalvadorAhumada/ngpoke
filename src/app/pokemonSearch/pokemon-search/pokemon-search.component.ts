import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-pokemon-search',
  templateUrl: './pokemon-search.component.html',
  styleUrls: ['./pokemon-search.component.css']
})
export class PokemonSearchComponent {
  
  constructor(public dialogRef: MatDialogRef<PokemonSearchComponent>, @Inject(MAT_DIALOG_DATA) public data: string,
  ) {}
  
  toSearch: string = '';
}
