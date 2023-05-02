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

  formatName(name: string):string {
    return name.charAt(0).toUpperCase() + name.slice(1);
  }

  ngOnInit(): void {

    const formattedName:string = this.formatName(this.pokemonName);
    this.selectedType = this.pokemonTypes[formattedName];
    this.selectedIcon = iconMapping[this.selectedType];
  }
}
