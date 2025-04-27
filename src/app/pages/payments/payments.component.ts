import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PaymentsService} from './../../services/payments.service';

@Component({
  selector: 'app-payments',
  imports: [CommonModule],
  templateUrl: './payments.component.html',
  styleUrl: './payments.component.scss'
})
export class PaymentsComponent {
  balance$ = this.paymentService.paymentBalance$;

  constructor(private paymentService: PaymentsService) {

  }

  updateBalance(balance: HTMLInputElement) {
    this.paymentService.addBalance(balance.valueAsNumber);
  }
}
