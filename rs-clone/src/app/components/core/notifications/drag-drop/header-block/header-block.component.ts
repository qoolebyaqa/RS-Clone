import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services/services.service';
@Component({
  selector: 'app-header-block',
  templateUrl: './header-block.component.html',
  styleUrls: ['./header-block.component.scss'],
})
export class HeaderBlockComponent implements OnInit {
  constructor(public boardService: ServicesService) {}

  ngOnInit(): void {}

  addColumn(event: string) {
    if (event) {
      this.boardService.addColumn(event);
    }
  }
}
