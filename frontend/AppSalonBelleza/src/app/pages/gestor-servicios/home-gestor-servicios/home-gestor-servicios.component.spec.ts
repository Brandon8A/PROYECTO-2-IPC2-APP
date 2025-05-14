import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeGestorServiciosComponent } from './home-gestor-servicios.component';

describe('HomeGestorServiciosComponent', () => {
  let component: HomeGestorServiciosComponent;
  let fixture: ComponentFixture<HomeGestorServiciosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeGestorServiciosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeGestorServiciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
