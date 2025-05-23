import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraLateralAnuncioComponent } from './barra-lateral-anuncio.component';

describe('BarraLateralAnuncioComponent', () => {
  let component: BarraLateralAnuncioComponent;
  let fixture: ComponentFixture<BarraLateralAnuncioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BarraLateralAnuncioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarraLateralAnuncioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
