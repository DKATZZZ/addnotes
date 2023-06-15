import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskDetailsComponent } from './components/task-details/task-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddTaskComponent,
    TaskListComponent,
    TaskDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
