import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NewserviceService } from 'src/app/newservice.service';

@Component({
  selector: 'app-task-pop-up',
  templateUrl: './task-pop-up.component.html',
  styleUrls: ['./task-pop-up.component.scss'],
})
export class TaskPopUpComponent implements OnInit {
  tasks: [] = [];
  title = 'addTask'
  @Output()
  falser = new EventEmitter();

  constructor (private serv: NewserviceService) { }


  hidder(e: Event) {
    e.preventDefault();
    this.falser.emit(this.title);
  }

  ngOnInit() :void{
  }

  getDataFromAPI () {
    this.serv.getData().subscribe((resp) => {
      console.log(resp)
    }, (err) => console.log(err));
  }
  disableSelect = new FormControl(false);
}
