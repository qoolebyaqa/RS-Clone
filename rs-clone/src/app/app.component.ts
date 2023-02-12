import { Component, OnInit, ViewChild } from '@angular/core';
import { NewserviceService } from './newservice.service';
import { ITask, IUser, UserPost } from './interfaces/interfaces'
import { HomeComponent } from './components/core/home/home.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor (private serv: NewserviceService) {}
  title = 'rs-clone';
  tasks?: ITask[];
  users?: IUser[];
  login = true;
  reg = false;
  entredUser?: string;

  async ngOnInit(){
    this.serv.getData().subscribe(data => {this.tasks = data; this.serv.tasks=data; this.tasks? this.serv.emitTasks(this.tasks):''});
    this.serv.getUsers().subscribe(data => { this.users = data; this.serv.users=data; this.users? this.serv.emitUsers(this.users):''});
  }

  entUser (obj: IUser) {
    for (const user of this.users!) {
      if (user.login.toUpperCase() === obj.login.toUpperCase()
      && user.password === obj.password) {
        this.login = false;
        this.entredUser = user.login;
        this.serv.emitUser(this.entredUser);
        this.serv.activeUser = user.login;
        return;
      }
    }
    alert('wrong acc');
  }
  async regUser (obj: IUser) {
    this.users?.forEach((value) => {
      if (obj.login === value.login) {
        return alert('user have already exist');
      }
    })
    const newUser = new UserPost();
    newUser.login = obj.login;
    newUser.password = obj.password;
    this.serv.setUsers(newUser).subscribe ((data) => { console.log(data) });
    await this.ngOnInit().then(() => {
      this.login = !this.login;
      this.reg = !this.reg;
    })
  }

}
