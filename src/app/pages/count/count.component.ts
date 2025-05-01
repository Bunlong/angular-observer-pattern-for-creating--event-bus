import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountService } from './../../services/count.service';

@Component({
  selector: 'app-count',
  imports: [CommonModule],
  templateUrl: './count.component.html',
  styleUrl: './count.component.scss'
})
export class CountComponent {
  // Subscribe to the count$ observable
  count = this.countService.count$;

  // Inject the CountService
  constructor(private countService: CountService) {}

  // Define method to increase the count by calling the CountService method
  increment() {
    this.countService.increment();
  }

  // Define method to decrease the count by calling the CountService method
  decrement() {
    this.countService.decrement();
  }
}
