import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViaCustomersComponent } from './via-customers.component';

describe('ViaCustomersComponent', () => {
  let component: ViaCustomersComponent;
  let fixture: ComponentFixture<ViaCustomersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViaCustomersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViaCustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
