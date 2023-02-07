
import { Component, EventEmitter, OnInit, Output, ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class CalendarComponent implements OnInit {
  title = 'calendar';
  @Output() falser = new EventEmitter();
  hours = ['01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00',
  '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00', '24:00', ]
  now = (new Date).toDateString();

  hidder(e: Event) {
    e.preventDefault();
    this.falser.emit(this.title);
  }

  Timepicker() {
    if ((document.querySelector('.mat-datepicker-input') as HTMLInputElement).attributes[2].value == this.now) {
      const curHour = (new Date).getHours();
      return this.hours.filter((value: string) => Number(value[0] + value[1]) > curHour);
    } return this.hours;
  }

  HoursRebuilder () {
    const wrapper = document.querySelector('.calendar__field') as HTMLElement;
    wrapper.innerHTML = '';
    let hoursArr: string[] = [];
    const curHour = (new Date).getHours();
    if ((document.querySelector('.mat-datepicker-input') as HTMLInputElement).attributes[2].value == this.now) {
      hoursArr = this.hours.filter((value: string) => Number(value[0] + value[1]) > curHour);
    } else { hoursArr = this.hours}
    hoursArr.forEach((hour) => {
      wrapper.innerHTML += `<p class="calendar__timeArr" >${hour}
      <button class="halfday">1st half</button>
      <button class="halfday">2nd half</button>
    </p>`
    })
  }

  nextDay () {
    const dateInput = document.querySelector('.mat-datepicker-input') as HTMLInputElement;
    let dateInInput;
    if (!dateInput.value) {
      dateInInput = new Date(dateInput.attributes[2].value);
    } else {
      dateInInput = new Date(dateInput.value)
    }
    let dateToPaste: Date = new Date();
    dateToPaste.setTime(dateInInput.getTime() + 86400000);
    dateInput.value = dateToPaste.toDateString();
    dateInput.attributes[2].value = dateToPaste.toDateString();
    this.HoursRebuilder();
    return dateToPaste.toDateString();
  }

  previousDay () {
    const dateInput = document.querySelector('.mat-datepicker-input') as HTMLInputElement;
    let dateInInput;
    if (!dateInput.value) {
      dateInInput = new Date(dateInput.attributes[2].value);
    } else {
      dateInInput = new Date(dateInput.value)
    }
    let dateToPaste: Date = new Date();
    dateToPaste.setTime(dateInInput.getTime() - 86400000);
    dateInput.value = dateToPaste.toDateString();
    dateInput.attributes[2].value = dateToPaste.toDateString();
    this.HoursRebuilder();
    return dateToPaste.toDateString();
  }

  ngOnInit(): void {

  }
}
