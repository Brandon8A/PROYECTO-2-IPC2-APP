import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderClienteComponent } from './slider-cliente.component';

describe('SliderClienteComponent', () => {
  let component: SliderClienteComponent;
  let fixture: ComponentFixture<SliderClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SliderClienteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SliderClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
