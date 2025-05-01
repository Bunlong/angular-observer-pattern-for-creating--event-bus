import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountService } from './../../services/count.service';

@Component({
  selector: 'app-count2',
  imports: [CommonModule],
  templateUrl: './count2.component.html',
  styleUrl: './count2.component.scss'
})
export class Count2Component {
  count = this.countService.count$;

  constructor(private countService: CountService) {}
}
