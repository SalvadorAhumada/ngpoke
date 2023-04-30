import { Component, Input, OnInit } from '@angular/core';
import { types, IKeyValue, iconMapping } from '../../../fakeApi/pokemons/pokemonTypes';

@Component({
  selector: 'app-icon-type',
  templateUrl: './icon-type.component.html',
  styleUrls: ['./icon-type.component.css']
})
export class IconTypeComponent implements OnInit {
  
  @Input() pokemonName: string = '';

  selectedIcon: string = '';

  selectedType: string = '';

  pokemonTypes: IKeyValue = types;

  ngOnInit(): void {
    this.selectedType = this.pokemonTypes[this.pokemonName];
    this.selectedIcon = iconMapping[this.selectedType];
  }
}
