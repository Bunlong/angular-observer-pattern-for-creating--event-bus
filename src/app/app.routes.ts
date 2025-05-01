import { Routes } from '@angular/router';

import { CountComponent } from './pages/count/count.component';
import { Count2Component } from './pages/count2/count2.component';
import { PrintComponent } from './pages/print/print.component';

export const routes: Routes = [
  {
    component: CountComponent,
    path: 'count'
  },
  {
    component: Count2Component,
    path: 'count2'
  },
  {
    component: PrintComponent,
    path: 'print'
  },
];
