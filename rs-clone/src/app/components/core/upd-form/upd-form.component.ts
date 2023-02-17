import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { ITask, taskPost } from 'src/app/classes/interfaces/interfaces';
import { NewserviceService } from 'src/app/newservice.service';

@Component({
  selector: 'app-upd-form',
  templateUrl: './upd-form.component.html',
  styleUrls: ['./upd-form.component.scss']
})
export class UpdFormComponent implements OnInit{
  @Output()
  closer = new EventEmitter();
  @Input()
  UpdatingTask?: ITask;
  wtf!: ITask;



  constructor (public serv: NewserviceService){}

  hidder(e?: Event) {
    e?.preventDefault();
    this.closer.emit();
  }

  ngOnInit(): void {
    if (this.UpdatingTask)
    this.wtf = this.UpdatingTask;
  }

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
    this.serv.updateData(this.UpdatingTask!._id, newPost).subscribe( (data) => { console.log(data);
      this.serv.tasks.map((value, index) => {
        if(value._id === this.UpdatingTask!._id){
          this.serv.tasks.splice(index, 1, this.UpdatingTask!);
        }
      })
      ?.push(data)
    });
    this.hidder();
  }

}
