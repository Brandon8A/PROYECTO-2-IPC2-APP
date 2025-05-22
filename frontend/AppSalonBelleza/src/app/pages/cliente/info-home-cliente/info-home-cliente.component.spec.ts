import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoHomeClienteComponent } from './info-home-cliente.component';

describe('InfoHomeClienteComponent', () => {
  let component: InfoHomeClienteComponent;
  let fixture: ComponentFixture<InfoHomeClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoHomeClienteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoHomeClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
