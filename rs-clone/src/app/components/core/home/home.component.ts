import { Component, OnInit } from '@angular/core';
import { NewserviceService } from 'src/app/newservice.service';
import { INote, ITask, taskPost } from 'src/app/classes/interfaces/interfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit{
  panelOpenState = false;
  hover: boolean = false;
  hasTask = false;
  hasAnyTask = false;
  hasOverdue = false;
  mineTodayTasks: ITask[] = [];
  mineTasks: ITask[] = [];
  overdueTasks: ITask[] = [];
  finishedTasks: ITask[] = [];
  updVisibleForm = false;
  infVisible = false;
  taskObj?: ITask;
  addTodayTask = false;
  segodnya: string = '';
  reminderVisible: boolean = false;
  homeNotes: INote[] = [];


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

   dateCalculator () {
    const IsoTime = new Date().toISOString();
    const differTime = new Date().getTimezoneOffset();
    let dateToTask = new Date();
    differTime < 0 ?
    dateToTask = new Date((new Date(IsoTime).getTime() - differTime * 60000)):
    dateToTask = new Date((new Date(IsoTime).getTime() + differTime * 60000));
    this.segodnya = dateToTask.toISOString().replace(new Date().toISOString().slice(new Date().toISOString().lastIndexOf(':')), '');
    return dateToTask.toISOString().replace(new Date().toISOString().slice(new Date().toISOString().lastIndexOf(':')), '')
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

  createInfoBlock (e: Event) {
    const target = e.target as HTMLElement;
    if (target.matches('.work__block')) {
      const id = target.children[0].id;
      this.serv.tasks.map((value: ITask) => {
        if (value._id === id as string) {
          this.serv.taskUPD = value;
          this.taskObj = value;
        }
      })
      this.infVisible = true;
    } else if (target.matches('.title')) {
      const id = target.id;
      this.serv.tasks.map((value: ITask) => {
        if (value._id === id as string) {
          this.serv.taskUPD = value;
          this.taskObj = value;
        }
      })
      this.infVisible = true;
    }
  }

  async deleteTask (e: Event) {
    const target = e.target as HTMLButtonElement;
    const id = target.parentElement!.parentElement!.children[0].id;

    this.serv.deleteData(id).subscribe((data) => {});
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
      this.ngOnInit();
    })
    target.parentElement!.parentElement!.remove();
  }

  addTask(e: Event) {
    e.stopPropagation();
    this.addTodayTask = true;
    this.dateCalculator()
  }

  addReminder(e: Event) {
    e.stopPropagation();
    this.reminderVisible = true;
  }

  closeForm () {this.updVisibleForm = false;}

  closeTask() {this.addTodayTask = false;}
  closeInfo() {this.infVisible = false;}
  closeReminder() {this.reminderVisible = false;}



}
