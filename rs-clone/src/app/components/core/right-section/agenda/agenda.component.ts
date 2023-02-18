import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { ITask } from 'src/app/classes/interfaces/interfaces';
import { NewserviceService } from 'src/app/newservice.service';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.scss']
})
export class AgendaComponent implements OnInit {
  title = 'agenda'
  @Output() falser = new EventEmitter();
  scheduled: ITask[] = [];

  now = new Date();

  constructor(public serv: NewserviceService) {}

  ngOnInit(): void {
    this.serv.tasks.forEach((value) => {
      const selectedDate = (new Date());
      const taskdate = (new Date(value.time));
      if (selectedDate) {
        if (selectedDate.getFullYear() === taskdate.getFullYear() &&
        selectedDate.getMonth() === taskdate.getMonth() &&
        selectedDate.getDate() === taskdate.getDate()) {
          this.scheduled?.push(value);
        }
      }
    })

  }

  hidder(e: Event) {
    e.preventDefault();
    this.falser.emit(this.title);
  }

  scheduledTasks(type: string, e: MatDatepickerInputEvent<Date>) {
    const selectedDate = e.value;
    this.scheduled = [];
    this.serv.tasks.forEach((value) => {
      const taskdate = (new Date(value.time));
      if (selectedDate) {
        if (selectedDate.getFullYear() === taskdate.getFullYear() &&
        selectedDate.getMonth() === taskdate.getMonth() &&
        selectedDate.getDate() === taskdate.getDate()) {
          this.scheduled?.push(value);
        }
      }
    })

  }
}
