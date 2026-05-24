import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mensajeguardado } from './mensajeguardado';

describe('Mensajeguardado', () => {
  let component: Mensajeguardado;
  let fixture: ComponentFixture<Mensajeguardado>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mensajeguardado],
    }).compileComponents();

    fixture = TestBed.createComponent(Mensajeguardado);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
