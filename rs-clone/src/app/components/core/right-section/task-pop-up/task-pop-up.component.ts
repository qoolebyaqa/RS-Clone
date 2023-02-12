import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ITask, IUser, UserPost } from 'src/app/interfaces/interfaces';
import { taskPost } from 'src/app/interfaces/interfaces';
import { NewserviceService } from 'src/app/newservice.service';

@Component({
  selector: 'app-task-pop-up',
  templateUrl: './task-pop-up.component.html',
  styleUrls: ['./task-pop-up.component.scss'],
})
export class TaskPopUpComponent implements OnInit {
  tasks: [] = [];
  title = 'addTask'
  @Output()
  falser = new EventEmitter();

  constructor (public serv: NewserviceService) { }


  hidder(e?: Event) {
    e?.preventDefault();
    this.falser.emit(this.title);
  }

  async ngOnInit() {
    this.serv.getData().subscribe(data => {this.tasks = data; this.serv.tasks=data; this.tasks? this.serv.emitTasks(this.tasks):''});
  }

  async postTask(obj: ITask) {
    const newPost = new taskPost();
    newPost.name = obj.name;
    newPost.workspace = obj.workspace
    newPost.discription = obj.discription;
    newPost.time = obj.time;
    newPost.checklist = obj.checklist;
    newPost.assignto = obj.assignto;
    newPost.attachments = obj.attachments;
    newPost.overdue = false;
    newPost.done = false;
    this.serv.setData(newPost).subscribe( async (data) => { console.log(data); this.serv.tasks?.push(data)});
    console.log(this.serv.tasks);
    this.hidder();
  }

  disableSelect = new FormControl(false);
}
