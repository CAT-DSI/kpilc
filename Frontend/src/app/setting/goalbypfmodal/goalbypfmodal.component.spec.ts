import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalbypfmodalComponent } from './goalbypfmodal.component';

describe('GoalbypfmodalComponent', () => {
  let component: GoalbypfmodalComponent;
  let fixture: ComponentFixture<GoalbypfmodalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoalbypfmodalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoalbypfmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
