import { Injectable, Inject } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class TaskService{
    constructor(private http:Http){
			console.log('Task Service Initialized...');
		}

		getTasks(){
			return this.http.get('http://localhost:3000/app/tasks')
			.map(res => res.json());
		}

		addTask(newTask){

		}
}
