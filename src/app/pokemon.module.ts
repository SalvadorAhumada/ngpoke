import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonDetailComponent } from './pokemon/pokemon-detail/pokemon-detail.component';
import { PokemonListComponent } from './pokemon/pokemon-list/pokemon-list.component';
import { IconTypeComponent } from './shared/icon-type/icon-type.component';
import { MaterialModule } from 'src/material.module';
import { AppRoutingModule } from './app-routing.module';
import { StoreModule } from '@ngrx/store';
import { pokemonReducer } from './pokemon/state/pokemon.reducer';
import { EffectsModule } from '@ngrx/effects';
import { PokemonEffects } from './pokemon/state/pokemon.effects';
import { PokemonShellComponent } from './pokemon/pokemon-shell/pokemon-shell.component';
import { PokemonCardComponent } from './pokemon/pokemon-card/pokemon-card.component';

@NgModule({
  declarations: [
    PokemonListComponent,
    PokemonDetailComponent,
    IconTypeComponent,
    PokemonShellComponent,
    PokemonCardComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    AppRoutingModule,
    StoreModule.forFeature('pokemons', pokemonReducer),
    EffectsModule.forFeature([PokemonEffects])
  ]
})
export class PokemonModule { }
