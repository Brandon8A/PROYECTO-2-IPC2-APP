import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearUsuarioMarketingComponent } from './crear-usuario-marketing.component';

describe('CrearUsuarioMarketingComponent', () => {
  let component: CrearUsuarioMarketingComponent;
  let fixture: ComponentFixture<CrearUsuarioMarketingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrearUsuarioMarketingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearUsuarioMarketingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
