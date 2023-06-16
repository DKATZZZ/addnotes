import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeactivateAuthGuard } from './utility/deactivauth.guard';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { TaskDetailsComponent } from './components/task-details/task-details.component';
import { TaskListComponent } from './components/task-list/task-list.component';

const routes: Routes = [{ path: 'register', loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterModule) }, 
{ path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)}, 
{ path: 'logout', loadChildren: () => import('./pages/logout/logout.module').then(m => m.LogoutModule)},
{ path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
{path:'add-task',component:AddTaskComponent},
{path:'task-details',component:TaskDetailsComponent},
{path:'task-list',component:TaskListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
