import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfileModalcomponent } from './User-Profile-Modal.component';

describe('UserProfileModalcomponent', () => {
  let component: UserProfileModalcomponent;
  let fixture: ComponentFixture<UserProfileModalcomponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserProfileModalcomponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserProfileModalcomponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
