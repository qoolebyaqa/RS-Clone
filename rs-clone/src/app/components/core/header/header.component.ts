import { Component, Input, OnInit, Output } from '@angular/core';
import { ITask } from 'src/app/classes/interfaces/interfaces';
import { NewserviceService } from 'src/app/newservice.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() ActiveUser?: string;
  @Input() logOut() {
    localStorage.clear();
  }
  @Input() firstLetter = '';
  searched: boolean = false;
  hover: boolean = false;
  infVisible = false;
  taskObj?: ITask;
  updVisibleForm = false;
  result: ITask[] = [];

  constructor(public serv: NewserviceService) {}
  ngOnInit(): void {}

  searcher(e: Event) {
    this.result = [];
    const text = (e.target as HTMLInputElement).value.toUpperCase();
    this.serv.tasks.forEach((value) => {
      if (value.title.toUpperCase().includes(text) && text !== '') {
        this.result.push(value);
      }
    });
  }

  createInfoBlock(e: Event) {
    const target = e.target as HTMLElement;
    if (target.matches('.work__block')) {
      const id = target.children[0].id;
      this.serv.tasks.map((value: ITask) => {
        if (value._id === (id as string)) {
          this.serv.taskUPD = value;
          this.taskObj = value;
        }
      });
      this.infVisible = true;
    } else if (target.matches('.title')) {
      const id = target.id;
      this.serv.tasks.map((value: ITask) => {
        if (value._id === (id as string)) {
          this.serv.taskUPD = value;
          this.taskObj = value;
        }
      });
      this.infVisible = true;
    }
  }

  createFormUp(e: Event) {
    e.stopPropagation();
    const target = e.target as HTMLButtonElement;
    const id = target.parentElement?.parentElement?.children[0].id;
    this.serv.tasks.map((value: ITask) => {
      if (value._id === (id as string)) {
        this.serv.taskUPD = value;
        this.taskObj = value;
      }
    });
    this.updVisibleForm = true;
  }

  async deleteTask(e: Event) {
    const target = e.target as HTMLButtonElement;
    const id = target.parentElement!.parentElement!.children[0].id;

    this.serv.deleteData(id).subscribe((data) => {});
    this.serv.getData().subscribe((data) => {
      this.serv.tasks = data;
    });
    target.parentElement!.parentElement!.remove();
  }
  async doneTask(e: Event) {
    const target = e.target as HTMLButtonElement;
    const id = target.parentElement!.parentElement!.children[0].id;
    const updTask: { isDone: boolean; time: string } = {
      isDone: true,
      time: '',
    };
    updTask.time = new Date().toLocaleString();
    this.serv.updateData(id, updTask).subscribe((data) => {});
    this.serv.getData().subscribe((data) => {
      this.serv.tasks = data;
    });
    target.parentElement!.parentElement!.remove();
  }

  closeForm() {
    this.updVisibleForm = false;
  }
  closeInfo() {
    this.infVisible = false;
  }

  getAvatar() {
    if (localStorage.getItem('avatarURL') !== null) {
      return localStorage['avatarURL'];
    }
    return 'https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png';
  }
}
