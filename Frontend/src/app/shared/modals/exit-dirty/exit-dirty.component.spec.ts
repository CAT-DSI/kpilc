import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExitDirtyComponent } from './exit-dirty.component';

describe('ExitDirtyComponent', () => {
  let component: ExitDirtyComponent;
  let fixture: ComponentFixture<ExitDirtyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExitDirtyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExitDirtyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
