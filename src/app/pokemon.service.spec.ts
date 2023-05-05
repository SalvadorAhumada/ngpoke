import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { PokemonService } from './pokemon.service';
import { environment } from '../environments/environment';

describe('PokemonService', () => {
  let service: PokemonService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports:[
        HttpClientModule
      ]
    });
    service = TestBed.inject(PokemonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

});
