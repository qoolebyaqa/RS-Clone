import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IlogUser, IregUser, ITask, IUser, UserPost } from './classes/interfaces/interfaces';
import { BehaviorSubject, filter, Observable, Subject, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewserviceService {
  username: string = '';
  tasks: ITask[] = [];
  users: IUser[] = [];
  taskUPD?: ITask;

  private tasks$: BehaviorSubject<any> = new BehaviorSubject([]);
  tasksObs$: Observable<ITask[]> = this.tasks$.asObservable();
  private users$: BehaviorSubject<any> = new BehaviorSubject([]);
  usersObs$: Observable<IUser[]> = this.users$.asObservable();

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
    localStorage.removeItem('auth-tok');
  }

  public logUser(user: IlogUser): Observable<{email: string, name: string, token: string}> {
    return this.http.post<{email: string, name: string, token: string}>('api/user/login', user);
  }

  public regUser(user: IregUser): Observable<{email: string, name: string, token: string}> {
      return this.http.post<{email: string, name: string, token: string}>('api/user/register', user);
    }

  public deleteData(id: string): Observable<any> {
    return this.http.delete<any>(`api/workouts/${id}`);
  }

  public updateData(id: string, task: {}): Observable<any> {
    return this.http.patch<any>(`api/workouts/${id}`, task);
  }


  public getData(): Observable<any> {
    return this.http.get('api/workouts');
  }

  public setData(task: ITask): Observable<any> {
    return this.http.post('api/workouts', task);
  }

  public getUsers(): Observable<any> {
    return this.http.get('api/user/users');
  }
  emitUsers(data: IUser[]) {
    this.users$.next(data);
    this.users$.complete();
  }
  emitTasks(data: ITask[]) {
    this.tasks$.next(data);
    this.tasks$.complete();
  }
}


