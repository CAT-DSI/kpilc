import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FamiliesMgtModalComponent } from './families-mgt-modal.component';

describe('FamiliesMgtModalComponent', () => {
  let component: FamiliesMgtModalComponent;
  let fixture: ComponentFixture<FamiliesMgtModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FamiliesMgtModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FamiliesMgtModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
