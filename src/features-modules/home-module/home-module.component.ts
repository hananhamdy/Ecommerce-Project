import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { User } from '../../core-module/interfaces/user.interface';
import { APIs } from '../../core-module/configs/APIs.config';
import { Product } from '../../core-module/interfaces/product.interface';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-home-module',
  standalone: true,
  imports: [],
  templateUrl: './home-module.component.html',
  styleUrl: './home-module.component.scss'
})
export class HomeModuleComponent {

  constructor(private _titleService:Title) {
    this._titleService.setTitle("Home Page");
  }

}
