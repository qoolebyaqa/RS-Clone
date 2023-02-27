import { Component } from '@angular/core';
import { NewserviceService } from 'src/app/newservice.service';

@Component({
  selector: 'app-right-section',
  templateUrl: './right-section.component.html',
  styleUrls: ['./right-section.component.scss']
})
export class RightSectionComponent  {

  public calendar = false;
  public agenda = false;
  public mentions = false;
  public addTask = false;

  constructor(public serv: NewserviceService) {  }
  ngOnInit() {  }

  closeTask (text: string) {this.addTask = false;}
  closeAgenda (text: string) {this.agenda = false;}
  closeMentions (text: string) {this.mentions = false;}
  closeCalendar (text: string) {this.calendar = false;}
}
