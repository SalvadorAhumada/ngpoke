import { ChangeDetectionStrategy, Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { IPokemonData } from 'src/app/shared/interfaces/pokemon';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class PokemonListComponent {
  
  title: string = 'ngPokemon';

  @Input()getSprite!: Function;
  @Input()getPokemonLink!: Function;
  @Input()pokemons!: IPokemonData[] | null;
  @Input()loading!: boolean;
  @Input()errorMsg!: string;
  @Input()breakpoint!: number;

  @Output() loadingCompleted = new EventEmitter<boolean>();

  loaderHandler(): void {
    this.loadingCompleted.emit();
  }

  checkLoading(): void {
    this.loadingCompleted.emit();
  }

  @HostListener('window:load', ['$event']) onDocumentLoad(_event: Event) {
    this.loaderHandler();
  }
}
