import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewserviceService {

  constructor() { }
  public calendar = false;
  public agenda = false;
  public mentions = false;
  public addTask = false;
}
