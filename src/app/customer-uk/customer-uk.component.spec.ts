import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerUkComponent } from './customer-uk.component';

describe('CustomerUkComponent', () => {
  let component: CustomerUkComponent;
  let fixture: ComponentFixture<CustomerUkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerUkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerUkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
