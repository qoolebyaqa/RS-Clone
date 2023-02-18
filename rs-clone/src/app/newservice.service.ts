import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IlogUser, IregUser, ITask, IUser, UserPost } from './classes/interfaces/interfaces';
import { BehaviorSubject, delay, filter, mergeMap, Observable, of, retryWhen, Subject, Subscription, throwError } from 'rxjs';

function retryPls <T> (delayMS = 1000, tries = 5) {
  let retries = tries;
  let arrErrors: any[] = [];
  return (src: Observable<T>): Observable<T> => src.pipe(
    retryWhen(err => err.pipe(
      delay(delayMS),
      mergeMap(err => {
        arrErrors.push(err);
        return --retries > 0 ? of(err) : throwError({ err: 'Mnogo' });
      })
    ))
  )
}
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
    return this.http.post<{email: string, name: string, token: string}>('api/user/login', user)
    .pipe(retryPls());
  }

  public regUser(user: IregUser): Observable<{email: string, name: string, token: string}> {
      return this.http.post<{email: string, name: string, token: string}>('api/user/register', user)
      .pipe(retryPls());
    }

  public deleteData(id: string): Observable<any> {
    return this.http.delete<any>(`api/workouts/${id}`)
    .pipe(retryPls());
  }

  public updateData(id: string, task: {}): Observable<any> {
    return this.http.patch<any>(`api/workouts/${id}`, task)
    .pipe(retryPls());
  }


  public getData(): Observable<any> {
    return this.http.get('api/workouts')
    .pipe(retryPls());
  }

  public setData(task: ITask): Observable<any> {
    return this.http.post('api/workouts', task)
    .pipe(retryPls());
  }

  public getUsers(): Observable<any> {
    return this.http.get('api/user/users')
    .pipe(retryPls());
  }

  public updateUser(id: string, user: {}): Observable<any> {
    return this.http.patch<any>(`api/user/${id}`, user)
    .pipe(retryPls());
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


