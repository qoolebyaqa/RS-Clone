import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ITask } from './interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class NewserviceService {

  constructor(private http: HttpClient) {  }


  public getData() {
    return this.http.get('/api/getData');
  }

  public setData(task: ITask) {
    return this.http.post('/api/getData', task);
  }
}


