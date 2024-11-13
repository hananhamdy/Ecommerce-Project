import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorage } from './localStorage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private user: any;
  private userKey: string = "loggedInUser";

  public onLogout: EventEmitter<void> = new EventEmitter<void>();

  constructor(
    private router: Router,
    private localStorage: LocalStorage
  ) {}

  public getCurrentUser() {
    this.user = JSON.parse(this.localStorage.get(this.userKey));
    return this.user;
  }
  
  public signOut() {
    this.localStorage.remove(this.userKey);
    this.router.navigate(['/login']);
  }

  public isAuthorized() {
    return localStorage.getItem('loggedInUser') !== null
  }
}
