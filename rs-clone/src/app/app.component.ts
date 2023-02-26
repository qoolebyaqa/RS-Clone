import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
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
  @Output() notified = new EventEmitter();

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
      const voice = document.createElement('audio');
      voice.src = "assets/notification.mp3";
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
          if (localStorage["notes"]) {
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
              const alertWindow = (document.querySelector('.notification__wrapper') as HTMLElement)
              alertWindow.style.visibility = "visible";
              alertWindow.children[0].children[0].innerHTML = '';
              alertWindow.children[0].children[0].innerHTML = `${value.text}`;
              voice.play()

            }
          })
        }
      }, 20000)




  }
}
