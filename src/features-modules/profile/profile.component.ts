import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CommonCashService } from '../../core-module/services/common-cash-service';
import { User } from '../../core-module/interfaces/user.interface';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  user: User | null = null;

  constructor(private _titleService:Title, private _commonCashService: CommonCashService) {
    this._titleService.setTitle("My Profile");
  }

  ngOnInit(): void {
    this._commonCashService.currentUser$.subscribe((user) => {
      this.user = user;
    });
  }
}
