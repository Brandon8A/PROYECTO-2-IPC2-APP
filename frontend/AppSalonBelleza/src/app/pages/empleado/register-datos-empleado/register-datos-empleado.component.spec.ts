import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterDatosEmpleadoComponent } from './register-datos-empleado.component';

describe('RegisterDatosEmpleadoComponent', () => {
  let component: RegisterDatosEmpleadoComponent;
  let fixture: ComponentFixture<RegisterDatosEmpleadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterDatosEmpleadoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterDatosEmpleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
