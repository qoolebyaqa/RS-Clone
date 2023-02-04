import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.scss']
})
export class AgendaComponent {
  title = 'agenda'
  @Output()
  falser = new EventEmitter();

  now = (new Date).toDateString();

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
}
