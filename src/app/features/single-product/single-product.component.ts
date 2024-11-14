import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { APIs } from '../../core/configs/APIs.config';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ProductDetails } from '../../core/interfaces/product-details.interface';
import { LoadingComponent } from '../../shared/components/loading/loading.component';

@Component({
  selector: 'app-single-product',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, HttpClientModule, LoadingComponent],
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
    this.isLoading = true;
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
