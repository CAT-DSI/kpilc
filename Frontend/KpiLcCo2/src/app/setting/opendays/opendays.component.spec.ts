import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpendaysComponent } from './opendays.component';

describe('OpendaysComponent', () => {
  let component: OpendaysComponent;
  let fixture: ComponentFixture<OpendaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpendaysComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpendaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
