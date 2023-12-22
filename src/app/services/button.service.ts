import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ButtonService {

  constructor() { }

  public buttonSubject = new BehaviorSubject<string>('reset');
  button$: Observable<string> = this.buttonSubject.asObservable();

  buttonNameChange(name: string) {
    this.buttonSubject.next(name)
  }
}
