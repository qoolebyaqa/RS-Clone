import { Component } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent {

  hidder() {
    (document.querySelector('.notification__wrapper') as HTMLElement).style.visibility = "hidden";
  }
}
