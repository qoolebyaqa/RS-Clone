import { Component, OnInit, ViewChild } from '@angular/core';
import { NewserviceService } from './newservice.service';
import { ITask } from './classes/interfaces/interfaces'
import { HomeComponent } from './components/core/home/home.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor (private serv: NewserviceService) {}
  title = 'rs-clone';
  tasks: ITask[] = [];

  ngOnInit(){
      const maybeToken = localStorage.getItem('auth-tok');
      const userActive = localStorage.getItem('name');
      this.serv.getData().subscribe((data) => {
        this.serv.tasks = data;
        this.serv.emitTasks(data);
        console.log(data);
      })
      this.serv.getUsers().subscribe((data) => {
        this.serv.users = data;
        this.serv.emitUsers(data);
        console.log(data);
      })

      if (maybeToken !== null) {
        this.serv.setToken(maybeToken);
        this.serv.username = userActive as string;
      }
  }
}
