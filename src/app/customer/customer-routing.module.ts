import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BillComponent } from './bill/bill.component';
import { CustomerComponent } from './customer.component';

const routes: Routes = [
  { path: 'shopowners', component: CustomerComponent },
  {path:'bill',component:BillComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
