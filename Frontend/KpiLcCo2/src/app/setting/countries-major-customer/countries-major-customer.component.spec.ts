import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountriesMajorCustomerComponent } from './countries-major-customer.component';

describe('CountriesMajorCustomerComponent', () => {
  let component: CountriesMajorCustomerComponent;
  let fixture: ComponentFixture<CountriesMajorCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountriesMajorCustomerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountriesMajorCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
