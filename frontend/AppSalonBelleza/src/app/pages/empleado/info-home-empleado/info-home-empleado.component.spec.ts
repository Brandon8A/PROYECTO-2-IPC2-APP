import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoHomeEmpleadoComponent } from './info-home-empleado.component';

describe('InfoHomeEmpleadoComponent', () => {
  let component: InfoHomeEmpleadoComponent;
  let fixture: ComponentFixture<InfoHomeEmpleadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoHomeEmpleadoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoHomeEmpleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
