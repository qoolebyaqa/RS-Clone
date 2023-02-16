import { Component, Input, OnInit } from '@angular/core';
import { NewserviceService } from 'src/app/newservice.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{

  @Input() ActiveUser?: string;
  @Input() logOut() {
    localStorage.clear();
  }
  @Input() firstLetter = '';

  constructor(public serv: NewserviceService) {
  }
  ngOnInit(): void {
  }

  getAvatar() {
    if (localStorage.getItem('avatarURL') !== null) {
      return localStorage['avatarURL'];
    }
    return 'https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png';
  }
}
