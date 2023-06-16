import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogoutComponent } from './logout.component';
import { DeactivateAuthGuard } from 'src/app/utility/deactivauth.guard';

const routes: Routes = [{ path: '', component: LogoutComponent,canDeactivate: [DeactivateAuthGuard]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LogoutRoutingModule { }
