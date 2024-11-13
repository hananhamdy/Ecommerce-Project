import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { User } from '../../core/interfaces/user.interface';
import { APIs } from '../../core/configs/APIs.config';
import { AuthenticationService } from '../../core/services/authentication.service';

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

  constructor(private _titleService:Title, private _route: ActivatedRoute, private _authenticationService: AuthenticationService) {
    this._titleService.setTitle("Single Product");
  }

  ngOnInit(): void {
    this._authenticationService.getCurrentUser().subscribe(user => {
      this.user = user;
      console.log(this.user);
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
