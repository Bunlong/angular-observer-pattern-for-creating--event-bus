import { Routes } from '@angular/router';

import {OrdersComponent} from './pages/orders/orders.component';
import {PaymentsComponent} from './pages/payments/payments.component';
import {ProfileComponent} from './pages/profile/profile.component';

export const routes: Routes = [
  {
    component: OrdersComponent,
    path: 'orders'
  },

  {
    component: PaymentsComponent,
    path: 'payments'
  },
  {
    component: ProfileComponent,
    path: 'profile'
  }
];
