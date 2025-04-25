import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterDatosClienteComponent } from './register-datos-cliente.component';

describe('RegisterDatosClienteComponent', () => {
  let component: RegisterDatosClienteComponent;
  let fixture: ComponentFixture<RegisterDatosClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterDatosClienteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterDatosClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
