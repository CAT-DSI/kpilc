import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WayBillModalComponent } from './way-bill-modal.component';

describe('WayBillModalComponent', () => {
  let component: WayBillModalComponent;
  let fixture: ComponentFixture<WayBillModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WayBillModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WayBillModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
