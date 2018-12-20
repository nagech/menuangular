import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { Customer } from './customer'
import { filterQueryId } from '@angular/core/src/view/util';

const CUSTOMERS = [
  {id: 1, firstname: 'Mary', lastname: 'Taylor', age: 24, nationality: 'US'},
  {id: 2, firstname: 'Peter', lastname: 'Smith', age: 18, nationality: 'UK'},
  {id: 3, firstname: 'Lauren', lastname: 'Taylor', age: 31, nationality: 'UK'},
  {id: 4, firstname: 'Michael', lastname: 'Brown', age: 45, nationality: 'US'},
  {id: 5, firstname: 'David', lastname: 'Moore', age: 25, nationality: 'US'},
  {id: 6, firstname: 'Holly', lastname: 'Davies', age: 27, nationality: 'UK'},
  {id: 7, firstname: 'Joe', lastname: 'Thomas', age: 36, nationality: 'UK'},
  {id: 8, firstname: 'Nagesh', lastname: 'Babu', age: 36, nationality: 'IN'},
];


@Injectable({
  providedIn: 'root'
})

@Injectable()
export class CustomerService {
  getCustomers() { return of(CUSTOMERS); }

  getCustomer(id: number | string) {
    return this.getCustomers().pipe(
      // (+) before `id` turns the string into a number
      map(customers => customers.find(customer => customer.id === +id))
    );
  }

  getCustomersByNationality(nationality: string){
    return this.getCustomers().pipe(
      map(customers => customers.filter(cust => cust.nationality === nationality))
    )
  }
}