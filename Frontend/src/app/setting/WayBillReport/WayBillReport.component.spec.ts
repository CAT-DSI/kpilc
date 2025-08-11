import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WayBillReportComponent } from './WayBillReport.component';

describe('WayBillReportComponent', () => {
  let component: WayBillReportComponent;
  let fixture: ComponentFixture<WayBillReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WayBillReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WayBillReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
