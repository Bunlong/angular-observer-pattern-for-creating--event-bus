import { Component, ElementRef, ViewChild } from '@angular/core';
import { fromEvent } from "rxjs";
import { map } from 'rxjs/operators';

import { PrintService } from './../../services/print.service';

@Component({
  selector: 'app-print',
  imports: [],
  templateUrl: './print.component.html',
  styleUrl: './print.component.scss'
})
export class PrintComponent {
  @ViewChild("addBtn", { static: true }) addBtn!: ElementRef;

  constructor(private _printService: PrintService) {}

  ngAfterViewInit() {
    fromEvent(this.addBtn.nativeElement, "click").subscribe((res) => {
      this._printService.print();
    });

    // // Create observable that emits click events
    // fromEvent(this.addBtn.nativeElement, 'click')
    //   // Map to string with given event timestamp
    //   .pipe(map((event: any) => `${event.timeStamp}`))
    //   // Print
    //   .subscribe(val => console.log(val));

    // fromEvent(this.addBtn.nativeElement, 'click')
    //   .subscribe((x: any) => console.log(`x: ${x.x}, y: ${x.y}`));

    // fromEvent(this.addBtn.nativeElement, 'keyup')
    //   .subscribe((x: any) => console.log(`key: ${x.code}`));
  }
}
