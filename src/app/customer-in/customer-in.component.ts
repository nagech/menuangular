import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { Customer } from '../customer'
import { CustomerService} from '../customer.service'

@Component({
  selector: 'app-customer-in',
  templateUrl: './customer-in.component.html',
  styleUrls: ['./customer-in.component.css']
})
export class CustomerInComponent implements OnInit {

  customers$: Observable<Customer[]>;

  constructor(private service: CustomerService) { }

  ngOnInit() {
      this.customers$ = this.service.getCustomersByNationality('IN');
  }
}
