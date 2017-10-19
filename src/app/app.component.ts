import { Component, Inject, OnInit } from '@angular/core';
import { TaskService } from '../app/http.services';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: `app.component.html`,
  providers : [TaskService]
})
export class AppComponent{ 
  onSubmit(value: any){
    console.log(value);
  }
 }
