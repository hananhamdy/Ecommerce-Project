import { Routes } from '@angular/router';
import { OopsComponent } from '../shared-module/components/oops/oops.component';
import { HomeModuleComponent } from '../features-modules/home-module/home-module.component';
import { LoginModuleComponent } from '../features-modules/login-module/login-module.component';
import { ProfileComponent } from '../features-modules/profile/profile.component';
import { CategoriesComponent } from '../features-modules/categories/categories.component';
import { SingleProductComponent } from '../features-modules/single-product/single-product.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
    },
    {
        path: 'login',
        component: LoginModuleComponent
    },
    {
        path: 'home',
        component: HomeModuleComponent
    },
    {
        path: 'categories',
        component: CategoriesComponent,
    },
    {
        path: 'category/:id',
        component: SingleProductComponent
    },
    {
        path: 'profile',
        component: ProfileComponent
    },
    {
        path: "**",
        component: OopsComponent
    },
];
