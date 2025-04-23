import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearUsuarioGestorServiciosComponent } from './crear-usuario-gestor-servicios.component';

describe('CrearUsuarioGestorServiciosComponent', () => {
  let component: CrearUsuarioGestorServiciosComponent;
  let fixture: ComponentFixture<CrearUsuarioGestorServiciosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrearUsuarioGestorServiciosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearUsuarioGestorServiciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
