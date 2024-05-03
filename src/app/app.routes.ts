import { Routes } from '@angular/router';
import { LoginComponent } from '~/auth/login/login.component';
import { isLoggedInGuard } from '~/guards/is-logged-in.guard';
import { ErrorComponent } from '~/shared/error/error.component';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: '/login' },    
    { path: 'login', component: LoginComponent },
    { path: 'home', loadChildren: () => import('./shared/home/home.routes').then(mod => mod.HomeRoutes), canActivate: [isLoggedInGuard] },  
    { path: '404', component: ErrorComponent }, 
    { path: '**', redirectTo: '/404' }, 
];
