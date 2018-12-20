import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';

import { CustomerUsComponent } from '../customer-us/customer-us.component';
import { CustomerUkComponent } from '../customer-uk/customer-uk.component';
import { CustomerInComponent } from '../customer-in/customer-in.component';
import { CustomerDetailComponent } from '../customer-detail/customer-detail.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component'

const routes: Routes = [
  { 
    path: 'customers-us', 
    component: CustomerUsComponent 
  },
  { 
    path: 'customers-uk', 
    component: CustomerUkComponent 
  },
  { 
    path: 'customers-in', 
    component: CustomerInComponent 
  },
  { 
    path: 'customers/:id',
    component: CustomerDetailComponent 
  },
  { 
    path: '',
    redirectTo: '/customers-us',
    pathMatch: 'full'
  },
  { 
    path: '**',
    component: PageNotFoundComponent 
  }
];

@NgModule({
  imports: [ 
              CommonModule, 
              RouterModule.forRoot(
                routes
              ) 
        ],
  exports: [ RouterModule ],
})
export class AppRoutingModule { }