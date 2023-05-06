import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PokemonService } from 'src/app/pokemon.service';
import { IPokemonData } from 'src/app/shared/interfaces/pokemon';
import { IPokemonDetails } from 'src/app/shared/interfaces/pokemonDetail';
import { faWeightHanging, faRuler, faHeart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css'],
})
export class PokemonCardComponent implements OnInit {
  constructor(private pokemonService: PokemonService) {
  }
  
  getClass(): string {
    return `type_${this.pokemonDetails.types[0].type.name}`;
  }
  
  faWeightHanging = faWeightHanging;
  faRuler = faRuler;
  faHeart = faHeart;
  
  @Input()pokemon!: IPokemonData
  @Input()getSprite!: Function;
  @Input()getPokemonLink!: Function;
  @Input()pokemonNo!: number;
  pokemonDetails!: IPokemonDetails;
  @Output()loadingCompleted = new EventEmitter<boolean>();
  cardLoaded: boolean = false;
  isImgLoaded:boolean = false;

  getStyle(hp: number):string {
    return `width:${hp > 100 ? 100 : hp}%`
  }

  ngOnInit(): void {
    this.pokemonService.getPokemonDetail(this.pokemonNo).subscribe(response => {  
      this.pokemonDetails = response;
      this.loadingCompleted.emit();
      this.cardLoaded = true;
    });
  }
}

