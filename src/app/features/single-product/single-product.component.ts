import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { User } from '../../core/interfaces/user.interface';
import { APIs } from '../../core/configs/APIs.config';
import { AuthenticationService } from '../../core/services/authentication.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ProductDetails } from '../../core/interfaces/product-details.interface';

@Component({
  selector: 'app-single-product',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, HttpClientModule],
  templateUrl: './single-product.component.html',
  styleUrl: './single-product.component.scss'
})
export class SingleProductComponent {
  productsDetails: ProductDetails = {};
  productId: string = ''
  isLoading = false;

  constructor(private _titleService:Title, private _route: ActivatedRoute, private _http: HttpClient) {
    
  }

  ngOnInit(): void {
    this.getProductDetails();
  }

  getProductDetails() {
    this._route.paramMap.subscribe(params => {
      this.productId = params.get('id') as string;
    });
    this._http.get(APIs.Products.GetProduct + this.productId).subscribe((res: ProductDetails) => {
      this.productsDetails = res;
      this._titleService.setTitle(this.productsDetails.title || 'Product Details');
      this.isLoading = false;
    });
  }
}
