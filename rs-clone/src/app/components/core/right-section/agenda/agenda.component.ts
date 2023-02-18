import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { ITask } from 'src/app/classes/interfaces/interfaces';
import { NewserviceService } from 'src/app/newservice.service';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.scss']
})
export class AgendaComponent {
  title = 'agenda'
  @Output() falser = new EventEmitter();
  scheduled: ITask[] = [];

  now = (new Date).toDateString();

  constructor(public serv: NewserviceService) {}

  hidder(e: Event) {
    e.preventDefault();
    this.falser.emit(this.title);
  }

  nextDay () {
    const dateInput = document.querySelector('.mat-datepicker-input') as HTMLInputElement;
    let dateInInput;
    if (!dateInput.value) {
      dateInInput = new Date(dateInput.attributes[3].value);
    } else {
      dateInInput = new Date(dateInput.value)
    }

    let dateToPaste: Date = new Date();
    dateToPaste.setTime(dateInInput.getTime() + 86400000);
    dateInput.value = dateToPaste.toDateString();
  }

  previousDay () {
    const dateInput = document.querySelector('.mat-datepicker-input') as HTMLInputElement;
    let dateInInput;
    if (!dateInput.value) {
      dateInInput = new Date(dateInput.attributes[3].value);
    } else {
      dateInInput = new Date(dateInput.value)
    }

    let dateToPaste: Date = new Date();
    dateToPaste.setTime(dateInInput.getTime() - 86400000);
    dateInput.value = dateToPaste.toDateString();
  }

  scheduledTasks(type: string, e: MatDatepickerInputEvent<Date>) {
    const selectedDate = e.value;;
    this.scheduled = [];

    this.serv.tasks.forEach((value) => {
      const taskdate = (new Date(value.time));
      if (selectedDate) {
        if (selectedDate.getFullYear() === taskdate.getFullYear() &&
        selectedDate.getMonth() === taskdate.getMonth() &&
        selectedDate.getDay() === taskdate.getDay()) {
          this.scheduled?.push(value);
        }
      }
    })
  }
}
