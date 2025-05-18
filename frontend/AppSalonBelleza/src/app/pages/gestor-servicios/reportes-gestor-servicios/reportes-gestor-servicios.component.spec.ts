import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportesGestorServiciosComponent } from './reportes-gestor-servicios.component';

describe('ReportesGestorServiciosComponent', () => {
  let component: ReportesGestorServiciosComponent;
  let fixture: ComponentFixture<ReportesGestorServiciosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReportesGestorServiciosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportesGestorServiciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
