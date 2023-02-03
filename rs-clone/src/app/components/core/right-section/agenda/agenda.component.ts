import { Component } from '@angular/core';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.scss']
})
export class AgendaComponent {
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
