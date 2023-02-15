import { Component, Input, OnInit } from '@angular/core';
import { NewserviceService } from 'src/app/newservice.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{

  @Input() ActiveUser?: string;

  constructor(public serv: NewserviceService) {

  }
  ngOnInit(): void {
  }

  getAvatar() {
    if (localStorage.getItem('avatarURL') !== null) {
      return localStorage['avatarURL'];
    }
    return '';
  }
}
