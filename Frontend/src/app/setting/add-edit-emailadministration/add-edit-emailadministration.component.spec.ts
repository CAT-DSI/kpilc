import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditEmailadministrationComponent } from './add-edit-emailadministration.component';

describe('AddEditEmailadministrationComponent', () => {
  let component: AddEditEmailadministrationComponent;
  let fixture: ComponentFixture<AddEditEmailadministrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditEmailadministrationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditEmailadministrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
