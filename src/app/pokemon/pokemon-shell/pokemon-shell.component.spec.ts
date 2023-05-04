import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonShellComponent } from './pokemon-shell.component';

describe('PokemonShellComponent', () => {
  let component: PokemonShellComponent;
  let fixture: ComponentFixture<PokemonShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonShellComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
