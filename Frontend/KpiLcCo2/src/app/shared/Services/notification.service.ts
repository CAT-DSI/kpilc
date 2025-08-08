import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  private messageSource = new BehaviorSubject<{ message: string, type: 'success' | 'error' }>({ message: '', type: 'success' });
  currentMessage = this.messageSource.asObservable();

  constructor() {}

  changeMessage(message: string, type: 'success' | 'error'): void {
    this.messageSource.next({ message, type });

    // Set a timeout to clear the message after 3 seconds (3000ms)
    setTimeout(() => {
      this.messageSource.next({ message: '', type: 'success' });  // Reset message and type
    }, 4000);
  }
}