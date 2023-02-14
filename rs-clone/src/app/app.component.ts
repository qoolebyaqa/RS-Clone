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

  /* tasks?: ITask[];
  users?: IUser[];
  login = true;
  reg = false;
  entredUser?: string;
 */
  ngOnInit(){
    const maybeToken = localStorage.getItem('auth-tok');
    const userActive = localStorage.getItem('name');
    this.serv.getData().subscribe((data) => {
      console.log(data);
      this.serv.tasks = data;
    })
    this.serv.getUsers().subscribe((data) => {
      console.log(data);
      this.serv.users = data;
    })

    if (maybeToken !== null) {
      this.serv.setToken(maybeToken);
      this.serv.username = userActive as string;
    }
  }


}
