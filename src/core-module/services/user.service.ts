import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class UserService {
    user: BehaviorSubject<User> = new BehaviorSubject<any>(null);

    constructor() {}
}
