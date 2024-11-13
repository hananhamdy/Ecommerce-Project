import { Routes } from '@angular/router';
import { OopsComponent } from '../shared-module/components/oops/oops.component';
import { HomeModuleComponent } from '../features-modules/home-module/home-module.component';
import { LoginModuleComponent } from '../features-modules/login-module/login-module.component';
import { ProfileComponent } from '../features-modules/profile/profile.component';
import { CategoriesComponent } from '../features-modules/categories/categories.component';
import { SingleProductComponent } from '../features-modules/single-product/single-product.component';
import { NotAuthorizedGuard } from '../core-module/routing-guards/notAutherized.guard';
import { AuthorizedGuard } from '../core-module/routing-guards/autherized.guard';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
    },
    {
        path: 'home',
        component: HomeModuleComponent
    },
    {
        path: 'login',
        canActivate: [NotAuthorizedGuard],
        component: LoginModuleComponent
    },
    {
        path: 'categories',
        canActivate: [AuthorizedGuard],
        component: CategoriesComponent,
    },
    {
        path: 'category/:id',
        canActivate: [AuthorizedGuard],
        component: SingleProductComponent
    },
    {
        path: 'profile',
        canActivate: [AuthorizedGuard],
        component: ProfileComponent
    },
    {
        path: "**",
        component: OopsComponent
    },
];
