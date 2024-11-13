import { Component, OnInit } from '@angular/core';
import { finalize, Subject, takeUntil } from 'rxjs';
import { APIs } from '../../core-module/configs/APIs.config';
import { Product } from '../../core-module/interfaces/product.interface';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';

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
