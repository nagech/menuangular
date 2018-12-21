import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { Customer } from '../customer'
import { CustomerService} from '../customer.service'

@Component({
  selector: 'app-customer-uk',
  templateUrl: './customer-uk.component.html',
  styleUrls: ['./customer-uk.component.css']
})
export class CustomerUkComponent implements OnInit {

  customers$: Observable<Customer[]>;

  constructor(private service: CustomerService) { }

  ngOnInit() {
      this.customers$ = this.service.getCustomersByNationality('UK');
  }

}
