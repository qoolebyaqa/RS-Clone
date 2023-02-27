import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ITask} from 'src/app/classes/interfaces/interfaces';
import { taskPost } from 'src/app/classes/interfaces/interfaces';
import { NewserviceService } from 'src/app/newservice.service';

@Component({
  selector: 'app-task-pop-up',
  templateUrl: './task-pop-up.component.html',
  styleUrls: ['./task-pop-up.component.scss'],
})
export class TaskPopUpComponent implements OnInit {
  tasks: [] = [];
  title = 'addTask'
  today = (new Date()).toLocaleString();
  @Input() CurrentDate?: string;
  @Input() CurrentTime?: string;
  @Output()
  falser = new EventEmitter();

  constructor (public serv: NewserviceService) { }


  hidder(e?: Event) {
    e?.preventDefault();
    this.falser.emit(this.title);
  }

  ngOnInit() {  }

  async postTask(obj: ITask) {
    const newPost = new taskPost();
    newPost.title = obj.title;
    newPost.details = obj.details;
    newPost.isDone = 'false';
    if (!obj.color) {
      newPost.color = '#000000';
    } else { newPost.color = obj.color }
    newPost.time = obj.time;
    new Date(obj.time) < new Date() ?  newPost.overdue = true : newPost.overdue = false;
    newPost.assignTo = obj.assignTo;
    newPost.from = this.serv.username;
    this.serv.setData(newPost).subscribe( (data) => { console.log(data); this.serv.tasks?.push(data)});
    this.hidder();
  }

  disableSelect = new FormControl(false);
}
