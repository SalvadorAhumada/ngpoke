import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Store } from '@ngrx/store';
import { State } from '../pokemon/state';
import * as PokemonActions from '../pokemon/state/actions/pokemon.actions';

@Component({
  selector: 'app-error-view',
  templateUrl: './error-view.component.html',
  styleUrls: ['./error-view.component.css']
})
export class ErrorViewComponent implements OnInit {
  constructor(private _snackBar: MatSnackBar, private store: Store<State>) {}

  @Input() error!: any;

  ngOnInit(): void {
    const snackbar = this._snackBar.open(this.error, 'Try Again');

    snackbar.afterDismissed().subscribe(()=> {
      this.store.dispatch(PokemonActions.loadPokemons());
    })
  }
}
