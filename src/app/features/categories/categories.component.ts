import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Product } from '../../core/interfaces/product.interface';
import { APIs } from '../../core/configs/APIs.config';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, RouterLink, HttpClientModule],
  providers: [],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})
export class CategoriesComponent implements OnInit {
  productsList: Product[] = [];
  isLoading = false;

  constructor(private _http: HttpClient) { }

  ngOnInit() {
    this.getProductsList();
  }

  getProductsList() {
    this._http.get(APIs.Products.GetProductsList).subscribe((res: any) => {
      this.productsList = res;
      this.isLoading = false;
    });
  }
}
