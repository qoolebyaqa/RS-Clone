import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EventData, ITask, IUser } from './interfaces/interfaces';
import { BehaviorSubject, filter, Observable, Subject, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewserviceService {
  tasks?: ITask[];
  users?: IUser[];
  entredUser?: string;
  private user$: BehaviorSubject<string> = new BehaviorSubject('');
  data$: Observable<string> = this.user$.asObservable();
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

  emit(data: string) {
    this.user$.next(data);
  }
}


