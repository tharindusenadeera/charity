import { Component, Inject, OnInit } from '@angular/core';
import { TaskService } from '../http.services';

@Component({
  moduleId: module.id,
  selector: 'tasks',
  templateUrl: `tasks.component.html`,
  providers : [TaskService]
})
export class TasksComponent{ 
    constructor(private taskService:TaskService){
        this.taskService.getTasks()
            .subscribe(tasks => {
                console.log(tasks);
            });
    }

    addTask(event){
        event.preventDefault();

    }
 }
 