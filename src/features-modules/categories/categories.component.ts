import { Component, OnInit } from '@angular/core';
import { finalize, Subject, takeUntil } from 'rxjs';
import { APIs } from '../../core-module/configs/APIs.config';
import { Product } from '../../core-module/interfaces/product.interface';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [],
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
