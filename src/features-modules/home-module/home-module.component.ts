import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { User } from '../../core-module/interfaces/user.interface';
import { APIs } from '../../core-module/configs/APIs.config';
import { Product } from '../../core-module/interfaces/product.interface';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-home-module',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, RouterLink],
  templateUrl: './home-module.component.html',
  styleUrl: './home-module.component.scss'
})
export class HomeModuleComponent implements OnInit {
  user: User | null = null;
  productsList: Product[] = [];
  isLoading = false;

  constructor(private _titleService:Title, private _cookieService: CookieService) {
    this._titleService.setTitle("Home Page");
  }

  ngOnInit(): void {
    // const userCookie = this._cookieService.get('loggedInUser');
    // this.user = JSON.parse(userCookie) as User;
    this.getProductsList();
  }

  getProductsList() {
    fetch(APIs.Products.GetProductsList)
      .then(res=>res.json())
      .then(json=> {
        this.productsList = json;
        this.isLoading = false;
      })
  }

}
