import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { RightSectionComponent } from '../right-section.component';

@Component({
  selector: 'app-task-pop-up',
  templateUrl: './task-pop-up.component.html',
  styleUrls: ['./task-pop-up.component.scss']
})
export class TaskPopUpComponent implements OnInit {
  @Input()
  public closer!: boolean;
  constructor() {}
  ngOnInit(): void {

  }

  hidder(e: Event) {
    e.preventDefault();
    const popup = document.querySelector('.popup__wrapper') as HTMLElement;
    popup.classList.add('close');


  }
  disableSelect = new FormControl(false);
}
