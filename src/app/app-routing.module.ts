import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonDetailComponent } from './pokemon/pokemon-detail/pokemon-detail.component';
import { PokemonShellComponent } from './pokemon/pokemon-shell/pokemon-shell.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo:'/pokedex', pathMatch: "full" },
  { path: 'pokedex', component: PokemonShellComponent },
  { path: 'pokedex/:pokemon', component: PokemonDetailComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
