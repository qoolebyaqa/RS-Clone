import { Component, OnInit, ViewChild } from '@angular/core';
import { NewserviceService } from './newservice.service';
import { ITask, IUser, UserPost } from './interfaces/interfaces'
import { HomeComponent } from './components/core/home/home.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor (private serv: NewserviceService) {}
  title = 'rs-clone';
  tasks?: ITask[];
  users?: IUser[];
  login = true;
  reg = false;
  entredUser?: string;

  async ngOnInit(){
    this.serv.getData().subscribe(data => {this.tasks = data; this.serv.tasks=data; this.tasks? this.serv.emitTasks(this.tasks):''});
  }


}
