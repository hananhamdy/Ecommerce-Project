import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class CommonCashService {
  private currentUserSubject = new BehaviorSubject<User | null>(null);
  currentUser$ = this.currentUserSubject.asObservable();

  // Set the current logged-in user
  setUser(user: User): void {
    this.currentUserSubject.next(user);
  }

  // Get the current logged-in user
  getUser(): User | null {
    return this.currentUserSubject.value;
  }

  // Clear user data when logging out
  clearUser(): void {
    this.currentUserSubject.next(null);
  }
}