import { Component, OnInit } from '@angular/core';
import { NewserviceService } from 'src/app/newservice.service';
import { ITask } from 'src/app/classes/interfaces/interfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit{
  panelOpenState = false;
  hasTask = false;
  hasAnyTask = false;
  hasOverdue = false;
  mineTodayTasks: ITask[] = [];
  mineTasks: ITask[] = [];
  theirTasks: ITask[] = [];
  overdueTasks: ITask[] = [];

  constructor(public serv: NewserviceService) {  }
  ngOnInit() {  }

 todayTask () {
    this.mineTasks = [];
    this.serv.tasks?.forEach((value) => {
      if(value.assignTo.toUpperCase() === this.serv.username?.toUpperCase() && new Date(value.time).getDate() === new Date().getDate() /* && !value.done */) {
        this.mineTasks.push(value);
      }
    });
    this.mineTodayTasks.length > 0 ? this.hasTask = true : this.hasTask = false;
  }

  AllTask () {
    this.mineTasks = [];
    this.serv.tasks?.forEach((value) => {
      if(value.assignTo.toUpperCase() === this.serv.username?.toUpperCase() /* && !value.done */) {
        this.mineTasks.push(value);
      }
    });
    this.mineTasks.length > 0 ? this.hasAnyTask = true : this.hasAnyTask = false;
  }

   /* overdueCheck () {
    this.overdueTasks = [];
    this.serv.tasks?.forEach((value) => {
      if(value.assignto.toUpperCase() === this.serv.activeUser?.toUpperCase() &&
      new Date(value.time).getDate() <= new Date().getDate() &&
      new Date(value.time).getTime() < new Date().getTime() &&
      !value.done) {
        this.overdueTasks.push(value);
      }
    });
    this.overdueTasks.length > 0 ? this.hasOverdue = true : this.hasOverdue = false;
  } */
}
