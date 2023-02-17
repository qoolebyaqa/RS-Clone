import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services/services.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(public boardService: ServicesService) {}

  ngOnInit(): void {}

  addColumn(event: string) {
    if (event) {
      this.boardService.addColumn(event);
    }
  }
}
