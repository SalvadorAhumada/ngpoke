import { Component, Input } from '@angular/core';
import { iconMapping } from '../../../fakeApi/pokemons/pokemonTypes';

@Component({
  selector: 'app-icon-type',
  templateUrl: './icon-type.component.html',
  styleUrls: ['./icon-type.component.css']
})
export class IconTypeComponent {
  
  @Input() pokemonName: string = '';

  @Input() types: Array<any> = [];

  selectedType: string = '';

  getIcon(name: string): string {
    return iconMapping[name];
  }


}
