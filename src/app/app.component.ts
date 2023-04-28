import { Component, OnInit } from '@angular/core';
import { PokemonService } from './pokemon.service';
import { Subscription } from 'rxjs';
import { IPokemon } from './pokemon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { }
