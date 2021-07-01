import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaruselGlobalComponent } from './carusel-global.component';

describe('CaruselGlobalComponent', () => {
  let component: CaruselGlobalComponent;
  let fixture: ComponentFixture<CaruselGlobalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaruselGlobalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaruselGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
