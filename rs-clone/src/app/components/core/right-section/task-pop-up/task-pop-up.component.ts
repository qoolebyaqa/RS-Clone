import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-task-pop-up',
  templateUrl: './task-pop-up.component.html',
  styleUrls: ['./task-pop-up.component.scss']
})
export class TaskPopUpComponent implements OnInit {

  title = 'addTask'
  @Output()
  falser = new EventEmitter();

  constructor () {
  }

  ngOnInit(): void {

  }

  hidder(e: Event) {
    e.preventDefault();
    this.falser.emit(this.title);
  }
  disableSelect = new FormControl(false);
}
