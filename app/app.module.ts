import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CustomerUsComponent } from './customer-us/customer-us.component';
import { CustomerUkComponent } from './customer-uk/customer-uk.component';
import { CustomerInComponent } from './customer-in/customer-in.component';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { AppRoutingModule } from './app-routing/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    CustomerUsComponent,
    CustomerUkComponent,
    CustomerInComponent,
    CustomerDetailComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
