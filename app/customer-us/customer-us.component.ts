import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { Customer } from '../customer'
import { CustomerService} from '../customer.service'

@Component({
  selector: 'app-customer-us',
  templateUrl: './customer-us.component.html',
  styleUrls: ['./customer-us.component.css']
})
export class CustomerUsComponent implements OnInit {

  customers$: Observable<Customer[]>;

  constructor(private service: CustomerService) { }

  ngOnInit() {
      this.customers$ = this.service.getCustomersByNationality('US');
  }
}
