import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestrictedUserComponent } from './restricted-user.component';

describe('RestrictedUserComponent', () => {
  let component: RestrictedUserComponent;
  let fixture: ComponentFixture<RestrictedUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestrictedUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestrictedUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
