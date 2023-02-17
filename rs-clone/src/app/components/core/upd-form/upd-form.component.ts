import { Component, OnInit } from '@angular/core';
import { NewserviceService } from 'src/app/newservice.service';

@Component({
  selector: 'app-upd-form',
  templateUrl: './upd-form.component.html',
  styleUrls: ['./upd-form.component.scss']
})
export class UpdFormComponent implements OnInit{

  constructor (public serv: NewserviceService){}

  ngOnInit(): void {  }

}
