import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { User } from '../../core-module/interfaces/user.interface';
import {MatCardModule} from '@angular/material/card';
import { CookieService } from 'ngx-cookie-service';
import { AuthenticationService } from '../../core-module/services/authentication.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  user: User | null = null;

  constructor(private _titleService:Title, private _authenticationService: AuthenticationService) {
    this._titleService.setTitle("My Profile");
  }

  ngOnInit(): void {
    this._authenticationService.getCurrentUser().subscribe(user => {
      this.user = user;
      console.log(this.user);
    });
  }
}
