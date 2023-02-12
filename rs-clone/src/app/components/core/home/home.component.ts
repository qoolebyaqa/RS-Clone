import { Component, OnInit } from '@angular/core';
import { NewserviceService } from 'src/app/newservice.service';
import { ITask } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit{
  panelOpenState = false;
  hasTask = false;
  hasOverdue = false;
  mineTasks: ITask[] = [];
  theirTasks: ITask[] = [];
  overdueTasks: ITask[] = [];

  constructor(public serv: NewserviceService) {  }
  ngOnInit() {  }

  todayTask () {
    this.mineTasks = [];
    this.theirTasks = [];
    this.serv.tasks?.forEach((value) => {
      if(value.assignto.toUpperCase() === this.serv.activeUser?.toUpperCase() && new Date(value.time).getDate() === new Date().getDate() && !value.done) {
        this.mineTasks.push(value);
      }
      if(value.checklist.toUpperCase() === this.serv.activeUser?.toUpperCase() && new Date(value.time).getDate() === new Date().getDate() && !value.done) {
        this.theirTasks.push(value);
      }
    });
    this.mineTasks.length > 0 || this.theirTasks.length > 0 ? this.hasTask = true : this.hasTask = false;
  }

  overdueCheck () {
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
  }
}
