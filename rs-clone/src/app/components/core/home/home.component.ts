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
  finishedTasks: ITask[] = [];
  updVisibleForm = false;
  taskObj?: ITask;


  constructor(public serv: NewserviceService) {  }
  ngOnInit() {
      this.finishedTasks = [];
      this.serv.getData().subscribe((data) => {
        this.serv.tasks = data;
        this.serv.tasks?.forEach((value) => {
          if (value.isDone) this.finishedTasks.push(value);
          });
      })
   }

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

  createFormUp (e: Event) {
    e.stopPropagation()
    const target = e.target as HTMLButtonElement;
    const id = target.parentElement?.parentElement?.children[0].id;
    this.serv.tasks.map((value: ITask) => {
      if (value._id === id as string) {
        this.serv.taskUPD = value;
        this.taskObj = value;
      }
    })
    this.updVisibleForm = true;
  }
  async deleteTask (e: Event) {
    const target = e.target as HTMLButtonElement;
    const id = target.parentElement!.parentElement!.children[0].id;

    this.serv.deleteData(id).subscribe((data) => {
      console.log(data);
    });
    this.serv.getData().subscribe((data) => {
      this.serv.tasks = data;
    })
    target.parentElement!.parentElement!.remove();
  }
  async doneTask (e: Event) {
    const target = e.target as HTMLButtonElement;
    const id = target.parentElement!.parentElement!.children[0].id;
    const updTask: {"isDone": boolean, "time": string} = {"isDone": true, "time": '' };
    updTask.time = new Date().toLocaleString()
    this.serv.updateData(id, updTask).subscribe((data) => {});
    this.serv.getData().subscribe((data) => {
      this.serv.tasks = data;
    })
    target.parentElement!.parentElement!.remove();
  }

  addTask(e: Event) {
    e.stopPropagation();
  }

  addReminder(e: Event) {
    e.stopPropagation();
  }

  closeForm () {
    this.updVisibleForm = false;
  }

}
