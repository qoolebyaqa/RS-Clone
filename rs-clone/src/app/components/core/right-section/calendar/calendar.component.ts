import { Component, Input } from '@angular/core';
import { MatInput } from '@angular/material/input';
import {FormControl} from '@angular/forms';


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})

export class CalendarComponent {
  @Input() med = '';
  hours = ['01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00',
  '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00', '24:00', ]
  now = (new Date).toDateString();

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
}
