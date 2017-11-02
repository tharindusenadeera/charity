import { Component } from '@angular/core';
import { CharityService} from './app.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CharityService]
})
export class AppComponent {
  title = 'app';

  [x: string]: any;
  
      fname  : string;
      lname  : string;
      age    : string;
      address: string;
      city   : string;
  
  
  
      constructor(private charityService:CharityService){
  /*         this.taskService.getTasks()
              .subscribe(tasks => {
                  console.log(tasks);
              });  */
              this.CharityService = charityService;
      }
  
      addTask(event : any){
          
           var tasks = {
               fname   : this.fname,
               lname   : this.lname,
               age     : this.age,
               address : this.address,
               city    : this.city
           }
   
           console.log(event , tasks);
           //console.log(this.userForm.value);
           
               this.charityService.addTask(tasks).subscribe(data => {
                   console.log('Successful')
               })
       }
}
