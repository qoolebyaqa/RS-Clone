import { Component, Input, OnInit } from '@angular/core';
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
  validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  @Input() isEmailValid = false;
  @Input() isNameValid = false;
  @Input() isPassValid = false;

  constructor(public serv: NewserviceService, public router: Router) { }

  onLogSubmit (obj: IlogUser) {
    if(!obj.email.match(this.validRegex)) {
      this.isEmailValid = true;
    } else {
      this.serv.logUser(obj).subscribe((data) => {
        localStorage.setItem('auth-tok', data.token);
        localStorage.setItem('name', data.name);
        this.serv.setToken(data.token);
        this.serv.username = data.name;
        this.router.navigate(['/']);
        this.loginVisible = false;
        this.regVisible = false;
      });
    }
  }

  onRegSubmit (obj: IregUser) {
    if(!obj.email.match(this.validRegex)) {
      this.isEmailValid = true;
    } else {
      this.isEmailValid = false;
    }
    if(!obj.name.length) {
      this.isNameValid = true;
    } else {
      this.isNameValid = false;
    }
    if(obj.password.length < 8) {
      this.isPassValid = true;
    } else {
      this.isPassValid = false;
    }
    if(!this.isEmailValid && !this.isNameValid && !this.isPassValid) {
      this.serv.regUser(obj).subscribe((data) => {
        this.serv.username = data.name;
        this.router.navigate(['/login']);
        this.loginVisible = true;
        this.regVisible = false;
      });
    }  
  }

  ngOnInit(): void {  }

}
