import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerUsComponent } from './customer-us.component';

describe('CustomerUsComponent', () => {
  let component: CustomerUsComponent;
  let fixture: ComponentFixture<CustomerUsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerUsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
