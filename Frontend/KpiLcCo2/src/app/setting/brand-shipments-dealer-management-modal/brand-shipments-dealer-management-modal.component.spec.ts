import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandShipmentsDealerManagementModalComponent } from './brand-shipments-dealer-management-modal.component';

describe('BrandShipmentsDealerManagementModalComponent', () => {
  let component: BrandShipmentsDealerManagementModalComponent;
  let fixture: ComponentFixture<BrandShipmentsDealerManagementModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrandShipmentsDealerManagementModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrandShipmentsDealerManagementModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
