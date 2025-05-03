import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorarioSalonComponent } from './horario-salon.component';

describe('HorarioSalonComponent', () => {
  let component: HorarioSalonComponent;
  let fixture: ComponentFixture<HorarioSalonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HorarioSalonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HorarioSalonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
