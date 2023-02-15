import { Component, OnInit } from '@angular/core';
import { NewserviceService } from 'src/app/newservice.service';
import { ITask, taskPost } from 'src/app/classes/interfaces/interfaces';

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
  updVisibleForm = false;

  constructor(public serv: NewserviceService) {  }
  ngOnInit() {  }

 todayTask () {
    this.mineTodayTasks = [];
    this.serv.tasks?.forEach((value) => {
      if(new Date(value.time).getDate() === new Date().getDate() && !value.isDone) {
        this.mineTodayTasks.push(value);
      }
    });
    this.mineTodayTasks.length > 0 ? this.hasTask = true : this.hasTask = false;
  }

  AllTask () {
    this.mineTasks = [];
    this.serv.tasks?.forEach((value) => {
      if (!value.isDone) this.mineTasks.push(value);
    });
    this.mineTasks.length > 0 ? this.hasAnyTask = true : this.hasAnyTask = false;
  }

   overdueCheck () {
    this.overdueTasks = [];
    this.serv.tasks?.forEach((value) => {
      if (new Date(value.time).getDate() < new Date().getDate() && !value.isDone) {
        this.overdueTasks.push(value);
      }
    });
    this.overdueTasks.length > 0 ? this.hasOverdue = true : this.hasOverdue = false;
  }

    async createFormUp (e: Event) {
      const target = e.target as HTMLButtonElement;
      const id = target.parentElement?.parentElement?.children[0].id;
      this.serv.tasks.map((value: ITask) => {
        if (value._id = id as string) {
          this.serv.taskUPD = value;
          return;
        }
      })

      /* const curState = await this.serv.
      if (id) this.serv.updateData(id) */
    }
}
