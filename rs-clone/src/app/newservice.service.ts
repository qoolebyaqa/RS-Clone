import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IlogUser, IregUser, ITask } from './classes/interfaces/interfaces';
import { BehaviorSubject, filter, Observable, Subject, Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NewserviceService {
  username: string = '';
  /* private tasks$: BehaviorSubject<any> = new BehaviorSubject([]);
  tasksObs$: Observable<ITask[]> = this.tasks$.asObservable();
  private users$: BehaviorSubject<any> = new BehaviorSubject([]);
  usersObs$: Observable<IUser[]> = this.users$.asObservable();
  private user$: BehaviorSubject<string> = new BehaviorSubject('');
  userObs$: Observable<string> = this.user$.asObservable();

  tasks?: ITask[];
  users?: IUser[];
  activeUser?: string; */

  private token: string | null = null;

  constructor(private http: HttpClient) {  }


  setToken (token: string | null) {
    this.token = token;
  }

  getToken () {
    return this.token;
  }

  isAuth (): boolean {
    return !!this.token;
  }

  logOut () {
    this.setToken(null);
    localStorage.removeItem('auth-token');
  }

  public logUser(user: IlogUser): Observable<{email: string, name: string, token: string}> {
    return this.http.post<{email: string, name: string, token: string}>('api/user/login', user)
    /* .pipe(
      tap(({token}) => {
        localStorage.setItem('auth-token', token);
        this.setToken(token);
        console.log(user);
      })
    ); */
  }

  public regUser(user: IregUser): Observable<{email: string, name: string, token: string}> {
      return this.http.post<{email: string, name: string, token: string}>('api/user/register', user);
    }




  public getData(): Observable<any> {
    return this.http.get('api/workouts');
  }

  public setData(task: ITask): Observable<any> { //BODY FOR POST REQ: { title: string, details: string, isDone: boolean, color: string (example: "#000000") }
    return this.http.post('api/workouts', task);
  }


  /* emitUser(data: string) {
    this.user$.next(data);
    this.user$.complete()
  }
  emitUsers(data: IUser[]) {
    this.users$.next(data);
    this.users$.complete();
  }
  emitTasks(data: ITask[]) {
    this.tasks$.next(data);
    this.tasks$.complete();
  } */
}


