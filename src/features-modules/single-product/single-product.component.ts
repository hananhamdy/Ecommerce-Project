import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Product } from '../../core-module/interfaces/product.interface';
import { User } from '../../core-module/interfaces/user.interface';
import { Title } from '@angular/platform-browser';
import { APIs } from '../../core-module/configs/APIs.config';
import { ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-single-product',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './single-product.component.html',
  styleUrl: './single-product.component.scss'
})
export class SingleProductComponent {
  user: User | null = null;
  productsDetails: any = {};
  productId: string = ''
  isLoading = false;

  constructor(private _titleService:Title, private _route: ActivatedRoute, private _cookieService: CookieService) {
    this._titleService.setTitle("Single Product");
  }

  ngOnInit(): void {
    // const userCookie = this._cookieService.get('loggedInUser');
    // this.user = JSON.parse(userCookie) as User;
    this.getProductDetails();
  }

  getProductDetails() {
    this._route.paramMap.subscribe(params => {
      this.productId = params.get('id') as string;
    });
    fetch(APIs.Products.GetProduct + this.productId)
      .then(res=>res.json())
      .then(json=> {
        this.productsDetails = json;
        this.isLoading = false;
      })
  }
}
