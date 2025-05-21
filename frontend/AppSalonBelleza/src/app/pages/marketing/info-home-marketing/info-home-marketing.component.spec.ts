import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoHomeMarketingComponent } from './info-home-marketing.component';

describe('InfoHomeMarketingComponent', () => {
  let component: InfoHomeMarketingComponent;
  let fixture: ComponentFixture<InfoHomeMarketingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoHomeMarketingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoHomeMarketingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
