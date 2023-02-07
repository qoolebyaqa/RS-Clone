import { Component, OnInit } from '@angular/core';
import { NewserviceService } from './newservice.service';
import { ITask } from './interfaces/interfaces'
import { taskPost } from './interfaces/interfaces';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor (private serv: NewserviceService) {}
  title = 'rs-clone';
  tasks?: ITask[];
  taskSet?: ITask;
  postFunc?: any;

  ngOnInit(){
    this.serv.getData().subscribe(data => { this.tasks = data });


 /*
 продумать логику, чтоб запросы отправлялись по клику
 const postReq =  (obj: ITask) => {
      const newPost = new taskPost();
      newPost.name = obj.name;
      newPost.workspace = obj.workspace
      newPost.discription = obj.discription;
      newPost.time = obj.time;
      newPost.checklist = obj.checklist;
      newPost.assignto = obj.assignto;
      newPost.attachments = obj.attachments;
      newPost.overdue = obj.overdue;
      this.serv.setData(newPost).subscribe(data => { this.taskSet = data });
    }
    this.postFunc = postReq({
      "workspace": "Team1",
      "name": "Serega",
      "discription": "Serega do it today in Team space",
      "time": "16:00",
      "overdue": true,
      "assignto": "dsklsdeje",
      "checklist": "sdqwwedqw",
      "attachments": "d:/qmusic"
    }); */



  }





}
