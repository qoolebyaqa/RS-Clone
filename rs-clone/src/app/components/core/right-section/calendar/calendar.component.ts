
import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
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
  hours = [ '00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00',
  '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00' ]
  now = new Date();
  visiblehours:string[] = [];
  SelectedTime: string = '';
  reminderVisible: boolean = false;

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



  timeCalculator1st (e: Event) {
    const btn = e.target as HTMLButtonElement;
    const calen = document.querySelector('.mat-datepicker-input') as HTMLInputElement;
    const calArr = calen.value.split('/');
    calArr[1].length < 2 ? calArr[1] = '0' + calArr[1]: calArr[1];
    calArr[0].length < 2 ? calArr[0] = '0' + calArr[0]: calArr[0];
    this.SelectedTime = calArr[2] + '-' + calArr[0] + '-' + calArr[1] + 'T' + btn.parentElement!.textContent!.slice(0, 3) + '00';
    this.reminderVisible = true;
   }
   timeCalculator2nd (e: Event) {
    const btn = e.target as HTMLButtonElement;
    const calen = document.querySelector('.mat-datepicker-input') as HTMLInputElement;
    const calArr = calen.value.split('/');
    calArr[1].length < 2 ? calArr[1] = '0' + calArr[1]: calArr[1];
    calArr[0].length < 2 ? calArr[0] = '0' + calArr[0]: calArr[0];
    this.SelectedTime = calArr[2] + '-' + calArr[0] + '-' + calArr[1] + 'T' + btn.parentElement!.textContent!.slice(0, 3) + '30';
    this.reminderVisible = true;
   }
   closeReminder() {this.reminderVisible = false;}

}
