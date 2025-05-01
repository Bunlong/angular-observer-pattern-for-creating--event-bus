import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountService {
  // Use BehaviorSubject to manage the state of count variable
  private _count = new BehaviorSubject<number>(0);

  constructor() { }

  // Expose observable count$ that other components can subscribe to receive update when the count change
  get count$() {
    return this._count.asObservable();
  }

  // Define method to increase the count
  increment() {
    this._count.next(this._count.value + 1);
  }

  // Define method to decrease the count  
  decrement() {
    this._count.next(this._count.value - 1);
  }
}
