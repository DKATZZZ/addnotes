import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeactivateAuthGuard } from './utility/deactivauth.guard';

const routes: Routes = [{ path: 'register', loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterModule) }, 
{ path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) }, 
{ path: 'logout', loadChildren: () => import('./pages/logout/logout.module').then(m => m.LogoutModule), canDeactivate: [DeactivateAuthGuard]},
{ path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
