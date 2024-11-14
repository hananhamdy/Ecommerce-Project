import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { LoginComponent } from './features/login/login.component';
import { CategoriesComponent } from './features/categories/categories.component';
import { SingleProductComponent } from './features/single-product/single-product.component';
import { ProfileComponent } from './features/profile/profile.component';
import { OopsComponent } from './shared/components/oops/oops.component';
import { AuthorizedGuard } from './core/guards/autherized.guard';
import { NotAuthorizedGuard } from './core/guards/not-autherized.guard';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'login',
        canActivate: [NotAuthorizedGuard],
        component: LoginComponent
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
