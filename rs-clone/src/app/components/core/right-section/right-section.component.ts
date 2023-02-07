import { Component } from '@angular/core';

@Component({
  selector: 'app-right-section',
  templateUrl: './right-section.component.html',
  styleUrls: ['./right-section.component.scss']
})
export class RightSectionComponent {

  public calendar = false;
  public agenda = false;
  public mentions = false;
  public addTask = false;

  closeTask (text: string) {this.addTask = false;}
  closeAgenda (text: string) {this.agenda = false;}
  closeMentions (text: string) {this.mentions = false;}
  closeCalendar (text: string) {this.calendar = false;}
}
