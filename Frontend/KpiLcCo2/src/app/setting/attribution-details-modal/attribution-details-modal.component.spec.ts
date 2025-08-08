import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttributionDetailsModalComponent } from './attribution-details-modal.component';

describe('AttributionDetailsModalComponent', () => {
  let component: AttributionDetailsModalComponent;
  let fixture: ComponentFixture<AttributionDetailsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttributionDetailsModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttributionDetailsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
