import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresarAnuncioComponent } from './ingresar-anuncio.component';

describe('IngresarAnuncioComponent', () => {
  let component: IngresarAnuncioComponent;
  let fixture: ComponentFixture<IngresarAnuncioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IngresarAnuncioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IngresarAnuncioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
