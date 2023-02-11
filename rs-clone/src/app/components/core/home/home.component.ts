import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ITask, IUser } from 'src/app/interfaces/interfaces';
import { NewserviceService } from 'src/app/newservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit{
  panelOpenState = false;


  constructor(public serv: NewserviceService) {

  }
  ngOnInit() {

  }
}
