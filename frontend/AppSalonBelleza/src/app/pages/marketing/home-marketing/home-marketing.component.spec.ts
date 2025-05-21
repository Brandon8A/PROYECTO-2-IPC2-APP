import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeMarketingComponent } from './home-marketing.component';

describe('HomeMarketingComponent', () => {
  let component: HomeMarketingComponent;
  let fixture: ComponentFixture<HomeMarketingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeMarketingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeMarketingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
