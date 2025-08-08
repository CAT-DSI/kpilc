import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpendaysMgtModalComponent } from './opendays-mgt-modal.component';

describe('OpendaysMgtModalComponent', () => {
  let component: OpendaysMgtModalComponent;
  let fixture: ComponentFixture<OpendaysMgtModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpendaysMgtModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpendaysMgtModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
