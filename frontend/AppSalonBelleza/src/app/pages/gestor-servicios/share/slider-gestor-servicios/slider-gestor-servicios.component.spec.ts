import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderGestorServiciosComponent } from './slider-gestor-servicios.component';

describe('SliderGestorServiciosComponent', () => {
  let component: SliderGestorServiciosComponent;
  let fixture: ComponentFixture<SliderGestorServiciosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SliderGestorServiciosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SliderGestorServiciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
