import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor() { }

  // nameSubject$ is an instance of BehaviorSubject
  private nameSubject = new BehaviorSubject<string | null>(null);
  // name$ is public property that exposes the nameSubject as an observable
  public name$ = this.nameSubject.asObservable()

  public saveName(name: string) {
    const message = `Hi ${name} `
    this.nameSubject.next(message);
  }
}
