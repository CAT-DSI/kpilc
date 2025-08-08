import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailAdministrationComponent } from './email-administration.component';

describe('EmailAdministrationComponent', () => {
  let component: EmailAdministrationComponent;
  let fixture: ComponentFixture<EmailAdministrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmailAdministrationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmailAdministrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
