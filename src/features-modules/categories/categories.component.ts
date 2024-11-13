import { Component, OnInit } from '@angular/core';
import { finalize, Subject, takeUntil } from 'rxjs';
import { APIs } from '../../core-module/configs/APIs.config';
import { Product } from '../../core-module/interfaces/product.interface';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, RouterLink],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})
export class CategoriesComponent implements OnInit {
  productsList: Product[] = [];
  isLoading = false;

  constructor(){}

  ngOnInit() {
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
