import { Component } from '@angular/core';

@Component({
  selector: 'app-right-section',
  templateUrl: './right-section.component.html',
  styleUrls: ['./right-section.component.scss']
})
export class RightSectionComponent {

  calendar = false;
  agenda = false;
  mentions = false;

  toogler(e: Event) {
    console.log('gg');
  }
}
