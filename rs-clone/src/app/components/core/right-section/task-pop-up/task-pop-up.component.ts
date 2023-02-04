import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-task-pop-up',
  templateUrl: './task-pop-up.component.html',
  styleUrls: ['./task-pop-up.component.scss'],
})
export class TaskPopUpComponent {
  disableSelect = new FormControl(false);
}
