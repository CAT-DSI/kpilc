import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InitPassComponent } from './init-pass.component';

describe('InitPassComponent', () => {
  let component: InitPassComponent;
  let fixture: ComponentFixture<InitPassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InitPassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InitPassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
