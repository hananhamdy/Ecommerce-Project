import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Product } from '../../core-module/interfaces/product.interface';
import { User } from '../../core-module/interfaces/user.interface';
import { CommonCashService } from '../../core-module/services/common-cash-service';
import { Title } from '@angular/platform-browser';
import { APIs } from '../../core-module/configs/APIs.config';
import { ActivatedRoute } from '@angular/router';

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

  constructor(private _titleService:Title, private _commonCashService: CommonCashService, private _route: ActivatedRoute) {
    this._titleService.setTitle("Single Product");
  }

  ngOnInit(): void {
    this._commonCashService.currentUser$.subscribe((user) => {
      this.user = user;
    });
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
