import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearUsuarioClienteComponent } from './crear-usuario-cliente.component';

describe('CrearUsuarioClienteComponent', () => {
  let component: CrearUsuarioClienteComponent;
  let fixture: ComponentFixture<CrearUsuarioClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrearUsuarioClienteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearUsuarioClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
