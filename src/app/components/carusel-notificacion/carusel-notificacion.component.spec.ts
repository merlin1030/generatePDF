import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaruselNotificacionComponent } from './carusel-notificacion.component';

describe('CaruselNotificacionComponent', () => {
  let component: CaruselNotificacionComponent;
  let fixture: ComponentFixture<CaruselNotificacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaruselNotificacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaruselNotificacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
