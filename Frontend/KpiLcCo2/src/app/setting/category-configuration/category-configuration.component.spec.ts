import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryConfigurationComponent } from './category-configuration.component';

describe('CategoryConfigurationComponent', () => {
  let component: CategoryConfigurationComponent;
  let fixture: ComponentFixture<CategoryConfigurationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryConfigurationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
