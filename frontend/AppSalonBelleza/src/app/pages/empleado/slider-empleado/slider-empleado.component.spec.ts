import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderEmpleadoComponent } from './slider-empleado.component';

describe('SliderEmpleadoComponent', () => {
  let component: SliderEmpleadoComponent;
  let fixture: ComponentFixture<SliderEmpleadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SliderEmpleadoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SliderEmpleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
