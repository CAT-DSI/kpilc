import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliverySiteIdentificationModalComponent } from './delivery-site-identification-modal.component';

describe('DeliverySiteIdentificationModalComponent', () => {
  let component: DeliverySiteIdentificationModalComponent;
  let fixture: ComponentFixture<DeliverySiteIdentificationModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeliverySiteIdentificationModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeliverySiteIdentificationModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
