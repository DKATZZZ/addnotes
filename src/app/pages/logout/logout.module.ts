import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LogoutRoutingModule } from './logout-routing.module';
import { LogoutComponent } from './logout.component';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [
    LogoutComponent
  ],
  imports: [
    CommonModule,
    LogoutRoutingModule,
    MatDialogModule
  ]
})
export class LogoutModule { }
