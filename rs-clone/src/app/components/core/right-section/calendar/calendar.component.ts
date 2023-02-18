
import { Component, EventEmitter, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';


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
  now = new Date();
  visiblehours:string[] = [];

  hidder(e: Event) {
    e.preventDefault();
    this.falser.emit(this.title);
  }

  hoursRebuilder(type: string, e: MatDatepickerInputEvent<Date>) {
    const selectedDate = e.value;
    const curDate = (new Date());
    if (selectedDate) {
      if (selectedDate.getDay() === curDate.getDay()) {
        const curHour = curDate.getHours();
        this.visiblehours = this.hours.filter((value: string) => Number(value[0] + value[1]) > curHour);
      } else {
        this.visiblehours = this.hours;
      }
    }
  }

  ngOnInit(): void {
    const curDate = (new Date());
    const curHour = curDate.getHours();
    this.visiblehours = this.hours.filter((value: string) => Number(value[0] + value[1]) > curHour);
  }

}
