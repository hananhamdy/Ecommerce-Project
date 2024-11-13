import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Product } from '../../core/interfaces/product.interface';
import { APIs } from '../../core/configs/APIs.config';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatOption, MatSelect } from '@angular/material/select';
import { NoDataComponent } from '../../shared/components/no-data/no-data.component';
import { AuthenticationService } from '../../core/services/authentication.service';
import { User } from '../../core/interfaces/user.interface';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [NoDataComponent,MatCardModule, MatButtonModule, RouterLink, HttpClientModule, MatLabel, MatSelect, MatFormField, MatOption],
  providers: [],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})
export class CategoriesComponent implements OnInit {
  user: User | null = null;
  productsList: Product[] = [];
  categoriesList: Product[] = [];
  selected = 'All';
  isLoading = false;

  constructor(private _http: HttpClient, private _authenticationService: AuthenticationService) {
  }

  ngOnInit() {
    this._authenticationService.getCurrentUser().subscribe(user => {
      this.user = user;
      console.log(this.user);
    });
    this.getCategoriesList();
    this.getProductsList();
  }

  getCategoriesList() {
    this._http.get(APIs.Products.GetCategoriesList).subscribe((res: any) => {
      this.categoriesList = ['All', ...res];;
      this.isLoading = false;
    });
  }

  getProductsList() {
    this.isLoading = true;
    this._http.get(APIs.Products.GetProductsList).subscribe((res: any) => {
      this.productsList = res;
      this.isLoading = false;
    });
  }

  selectCategory(item: any) {
    this.isLoading = true;
    if(item == 'All') {
      this.getProductsList();
      return;
    }
    this._http.get(APIs.Products.GetCategory + item).subscribe((res: any) => {
      this.productsList = res;
      this.isLoading = false;
    });
  }
}
