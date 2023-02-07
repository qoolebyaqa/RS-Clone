import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ITask } from './interfaces/interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewserviceService {

  constructor(private http: HttpClient) {  }


  public getData(): Observable<any> {
    return this.http.get('/api/getData');
  }

  public setData(task: ITask): Observable<any> {
    return this.http.post('/api/getData', task);
  }
}


