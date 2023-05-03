import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Components
import { NavbarComponent } from './navbar/navbar.component';
import { AppComponent } from './app.component';
// All of the Material Components
import { MaterialModule } from '../material.module';
import { HttpClientModule } from '@angular/common/http';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { StoreModule } from '@ngrx/store';
import { PokemonModule } from './pokemon.module';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    StoreModule.forRoot({}, {}),
    PokemonModule,
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({ name: "ngPoke devTools", maxAge: 25, logOnly: !isDevMode() }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
