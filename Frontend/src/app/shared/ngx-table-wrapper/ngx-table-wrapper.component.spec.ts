import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxTableWrapperComponent } from './ngx-table-wrapper.component';

describe('NgxTableWrapperComponent', () => {
  let component: NgxTableWrapperComponent;
  let fixture: ComponentFixture<NgxTableWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxTableWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxTableWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
