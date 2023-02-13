import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IlogUser, IregUser} from 'src/app/classes/interfaces/interfaces';
import { NewserviceService } from 'src/app/newservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username: string = '';
  loginVisible = true;
  regVisible = false;


  constructor(public serv: NewserviceService, public router: Router) { }

  onLogSubmit (obj: IlogUser) {
    this.serv.logUser(obj).subscribe((data) => {
      localStorage.setItem('auth-tok', data.token);
      this.serv.setToken(data.token);
      this.serv.username = data.name;
      this.router.navigate(['/']);
      this.loginVisible = false;
      this.regVisible = false;
    });
  }

  onRegSubmit (obj: IregUser) {
    this.serv.regUser(obj).subscribe((data) => {
      this.serv.username = data.name;
      this.router.navigate(['/login']);
      this.loginVisible = true;
      this.regVisible = false;
    });
  }

  ngOnInit(): void {  }

}
