import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveUserModalComponent } from './save-user-modal.component';

describe('SaveUserModalComponent', () => {
  let component: SaveUserModalComponent;
  let fixture: ComponentFixture<SaveUserModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaveUserModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveUserModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
