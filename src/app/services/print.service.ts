import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PrintService {

  constructor() { }

  print() {
    console.log('Print');
  }
}
