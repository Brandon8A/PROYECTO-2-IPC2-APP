import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportesMarketingComponent } from './reportes-marketing.component';

describe('ReportesMarketingComponent', () => {
  let component: ReportesMarketingComponent;
  let fixture: ComponentFixture<ReportesMarketingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReportesMarketingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportesMarketingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
