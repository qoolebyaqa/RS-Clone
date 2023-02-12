import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ITask, IUser } from './interfaces/interfaces';
import { BehaviorSubject, filter, Observable, Subject, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewserviceService {
  private tasks$: BehaviorSubject<any> = new BehaviorSubject([]);
  tasksObs$: Observable<ITask[]> = this.tasks$.asObservable();
  private users$: BehaviorSubject<any> = new BehaviorSubject([]);
  usersObs$: Observable<IUser[]> = this.users$.asObservable();
  private user$: BehaviorSubject<string> = new BehaviorSubject('');
  userObs$: Observable<string> = this.user$.asObservable();

  tasks?: ITask[];
  users?: IUser[];
  activeUser?: string;

  constructor(private http: HttpClient) {  }


  public getData(): Observable<any> {
    return this.http.get('/api/getData');
  }

  public setData(task: ITask): Observable<any> {
    return this.http.post('/api/getData', task);
  }

  public getUsers(): Observable<any> {
    return this.http.get('/api/getUsers');
  }

  public setUsers(user: IUser): Observable<any> {
    return this.http.post('/api/getUsers', user);
  }

  emitUser(data: string) {
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
  }
}


