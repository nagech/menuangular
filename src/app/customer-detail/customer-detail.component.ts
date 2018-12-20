import { Component, OnInit } from '@angular/core';

import { switchMap } from 'rxjs/operators';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { Location } from '@angular/common';

import { Observable } from 'rxjs';

import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {

  customer$: Observable<Customer>;

  constructor(  
    private route: ActivatedRoute,
    private location: Location,
    private service: CustomerService
  ) { }

  ngOnInit() {
    this.customer$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.service.getCustomer(params.get('id')))
    );
  }

  goBack(): void {
    this.location.back();
  }
}