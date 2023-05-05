import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { PokemonShellComponent } from './pokemon-shell.component';
import { StoreModule } from '@ngrx/store';
import { PokemonListComponent } from '../../pokemon/pokemon-list/pokemon-list.component';
describe('PokemonShellComponent', () => {
  let component: PokemonShellComponent;
  let fixture: ComponentFixture<PokemonShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PokemonShellComponent, PokemonListComponent],
      imports: [
        HttpClientModule,
        StoreModule.forRoot({})]
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
