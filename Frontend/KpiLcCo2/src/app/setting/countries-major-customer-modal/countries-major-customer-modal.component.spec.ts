import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountriesMajorCustomerModalComponent } from './countries-major-customer-modal.component';

describe('CountriesMajorCustomerModalComponent', () => {
  let component: CountriesMajorCustomerModalComponent;
  let fixture: ComponentFixture<CountriesMajorCustomerModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountriesMajorCustomerModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountriesMajorCustomerModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
