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

  toogler(e: Event) {
    console.log('gg');
  }
}
