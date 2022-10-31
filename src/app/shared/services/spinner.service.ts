import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SpinnerService {
  isLoading = new BehaviorSubject<Boolean>(false);

  constructor() {}

  show() {
    this.isLoading.next(true);
  }

  hide() {
    this.isLoading.next(false);
  }

  getLoading(): Observable<Boolean> {
    return this.isLoading.asObservable();
  }
}
