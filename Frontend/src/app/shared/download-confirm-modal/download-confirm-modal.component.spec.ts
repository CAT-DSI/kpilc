import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadConfirmModalComponent } from './download-confirm-modal.component';

describe('DownloadConfirmModalComponent', () => {
  let component: DownloadConfirmModalComponent;
  let fixture: ComponentFixture<DownloadConfirmModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DownloadConfirmModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DownloadConfirmModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
