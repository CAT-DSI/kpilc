import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MajorCustomerModalComponent } from './major-customer-modal.component';

describe('MajorCustomerModalComponent', () => {
  let component: MajorCustomerModalComponent;
  let fixture: ComponentFixture<MajorCustomerModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MajorCustomerModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MajorCustomerModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
