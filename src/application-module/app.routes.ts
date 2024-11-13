import { Routes } from '@angular/router';
import { LoginModuleComponent } from '../login-module/login-module.component';
import { HomeModuleComponent } from '../home-module/home-module.component';
import { OopsComponent } from '../shared/components/oops/oops.component';

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
        path: "**",
        component: OopsComponent
    },
];
