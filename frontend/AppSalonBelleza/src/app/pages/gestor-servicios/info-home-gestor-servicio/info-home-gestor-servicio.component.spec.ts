import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoHomeGestorServicioComponent } from './info-home-gestor-servicio.component';

describe('InfoHomeGestorServicioComponent', () => {
  let component: InfoHomeGestorServicioComponent;
  let fixture: ComponentFixture<InfoHomeGestorServicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoHomeGestorServicioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoHomeGestorServicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
