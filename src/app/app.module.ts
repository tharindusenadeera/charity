import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent }  from './app.component';
import { HttpModule} from '@angular/http';
import {TasksComponent} from './tasks/tasks.components';

@NgModule({
  imports:      [ BrowserModule,FormsModule,HttpModule ],
  declarations: [ AppComponent, TasksComponent ],
  bootstrap:    [ AppComponent, TasksComponent ]
})
export class AppModule { }
