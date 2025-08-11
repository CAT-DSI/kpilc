import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpendaysmodalComponent } from './opendaysmodal.component';

describe('OpendaysmodalComponent', () => {
  let component: OpendaysmodalComponent;
  let fixture: ComponentFixture<OpendaysmodalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpendaysmodalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpendaysmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
