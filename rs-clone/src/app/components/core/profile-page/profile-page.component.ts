import { Component, Input, OnInit } from '@angular/core';
import { NewserviceService } from 'src/app/newservice.service';

const avatars = [
  'https://cdn.dribbble.com/users/2733/screenshots/16647853/media/92530066c452d78ec4a53779ea7d7ff8.jpg?compress=1&resize=1600x1200&vertical=top',
  'https://cdn.dribbble.com/users/2733/screenshots/16776183/media/cd857421c6c7824dfb81e16f41060044.png?compress=1&resize=1600x1200&vertical=top',
  'https://cdn.dribbble.com/users/2733/screenshots/16867940/media/0dd61a895835af1e9390cc50f2224de1.jpg?compress=1&resize=1600x1200&vertical=top',
  'https://cdn.dribbble.com/users/2733/screenshots/16545809/media/6fe81bcab7615280f7b93be52462f484.jpg?compress=1&resize=1600x1200&vertical=top',
  'https://cdn.dribbble.com/users/2733/screenshots/16593926/media/eb00820710339c8160bf66148204a48f.jpg?compress=1&resize=1600x1200&vertical=top'
]

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit{
  results: number =  0
  progress: number = 0
  @Input() avatars = avatars;
  @Input() isAvatarModal = false;
  @Input() changeAvatar(avatar: string) {
    localStorage.setItem('avatarURL', avatar);
    this.avatarURL = localStorage.getItem('avatarURL');
    this.isAvatarModal = false;
  }
  @Input() avatarURL = localStorage.getItem('avatarURL');

  constructor(public serv: NewserviceService) {

  }
  ngOnInit(): void {
    this.results = this.serv.tasks.filter((value) => value.isDone).length;
    this.progress = (this.results*100) / this.serv.tasks.length;
  }


}
