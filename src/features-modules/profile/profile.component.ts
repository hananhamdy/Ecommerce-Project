import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { User } from '../../core-module/interfaces/user.interface';
import {MatCardModule} from '@angular/material/card';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  user: User | null = null;

  constructor(private _titleService:Title, private _cookieService: CookieService) {
    this._titleService.setTitle("My Profile");
  }

  ngOnInit(): void {
    // const userCookie = this._cookieService.get('loggedInUser');
    // this.user = JSON.parse(userCookie) as User;
  }
}
