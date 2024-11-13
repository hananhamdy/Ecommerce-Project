import { Routes } from '@angular/router';
import { LoginModuleComponent } from '../login-module/login-module.component';
import { HomeModuleComponent } from '../home-module/home-module.component';
import { OopsModuleComponent } from '../oops-module/oops-module.component';

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
        component: OopsModuleComponent
    },
];
