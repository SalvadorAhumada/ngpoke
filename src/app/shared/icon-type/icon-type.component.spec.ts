import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MaterialModule } from '../../../material.module';
import { IconTypeComponent } from './icon-type.component';

describe('IconTypeComponent', () => {
  let component: IconTypeComponent;
  let fixture: ComponentFixture<IconTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconTypeComponent ],
      imports:[ MaterialModule ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
