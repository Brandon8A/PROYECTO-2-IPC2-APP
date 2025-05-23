import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeEmpleadoComponent } from './home-empleado.component';

describe('HomeEmpleadoComponent', () => {
  let component: HomeEmpleadoComponent;
  let fixture: ComponentFixture<HomeEmpleadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeEmpleadoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeEmpleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
