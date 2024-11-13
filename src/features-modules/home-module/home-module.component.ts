import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CommonCashService } from '../../core-module/services/common-cash-service';
import { User } from '../../core-module/interfaces/user.interface';

@Component({
  selector: 'app-home-module',
  standalone: true,
  imports: [],
  templateUrl: './home-module.component.html',
  styleUrl: './home-module.component.scss'
})
export class HomeModuleComponent implements OnInit {
  user: User | null = null;

  constructor(private _titleService:Title, private _commonCashService: CommonCashService) {
    this._titleService.setTitle("Home Page");
  }

  ngOnInit(): void {
    this._commonCashService.currentUser$.subscribe((user) => {
      this.user = user;
    });
  }

}
