import { Component, OnInit } from '@angular/core';
import { NewserviceService } from './newservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor (private serv: NewserviceService) {}
  title = 'rs-clone';

  ngOnInit(){
    this.getDataFromAPI();
  }

  getDataFromAPI () {
    this.serv.getData().subscribe((resp) => {
      console.log(resp)
    }, (err) => console.log(err));
  }
}
