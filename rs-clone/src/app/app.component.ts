import { Component, OnInit, ViewChild } from '@angular/core';
import { NewserviceService } from './newservice.service';
import { ITask } from './classes/interfaces/interfaces'
import { HomeComponent } from './components/core/home/home.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor (public serv: NewserviceService, private rout: Router) {
    let path = localStorage.getItem('path');
    if(path) {
      localStorage.removeItem('path');
      this.rout.navigate([path]);
    }
  }
  title = 'rs-clone';
  tasks: ITask[] = [];

  ngOnInit(){
      const maybeToken = localStorage.getItem('auth-tok');
      const userActive = localStorage.getItem('name');
      this.serv.getData().subscribe((data) => {
        this.serv.tasks = data;
        this.serv.emitTasks(data);
      })
      this.serv.getUsers().subscribe((data) => {
        this.serv.users = data;
        this.serv.emitUsers(data);
      })

      if (maybeToken !== null) {
        this.serv.setToken(maybeToken);
        this.serv.username = userActive as string;
      }



        setInterval(() => {
          if (JSON.parse(localStorage["notes"]).length > 0) {
            const moment = new Date().toTimeString().slice(0, 5);
            this.serv.notes = JSON.parse(localStorage["notes"]);
            this.serv.notes = this.serv.notes?.filter((value) => {
              if (Number(value.time.slice(0, 2)) >= Number(moment.slice(0, 2)) && Number(value.time.slice(3)) >= Number(moment.slice(3))) {
                return true;
              } return false;
            })
            localStorage.setItem("notes", JSON.stringify(this.serv.notes));
          this.serv.notes.forEach((value, index) => {
            if (value.time.slice(0, 2) === moment.slice(0, 2) && value.time.slice(3) === moment.slice(3)) {
              this.serv.notes?.splice(index, 1);
              localStorage.setItem("notes", JSON.stringify(this.serv.notes));
              alert(`Настало время сделать ${value.text}`);
            }
          })
        }
      }, 2000)




  }
}
