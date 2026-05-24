import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Escribirjefes } from './escribirjefes';

describe('Escribirjefes', () => {
  let component: Escribirjefes;
  let fixture: ComponentFixture<Escribirjefes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Escribirjefes],
    }).compileComponents();

    fixture = TestBed.createComponent(Escribirjefes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
