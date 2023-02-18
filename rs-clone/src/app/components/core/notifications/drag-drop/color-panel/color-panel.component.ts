import { Component, OnInit, Output, EventEmitter } from '@angular/core';
enum colors {
  RED = '#e92c64',
  GREEN = '#009886',
  BLUE = '#208eed',
  VIOLET = '#912f84',
  YELLOW = '#b36619',
  PINK = '#6e1d96',
}
@Component({
  selector: 'app-color-panel',
  templateUrl: './color-panel.component.html',
  styleUrls: ['./color-panel.component.scss'],
})
export class ColorPanelComponent implements OnInit {
  @Output() emitColor: EventEmitter<string> = new EventEmitter();
  @Output() colors = colors;
  @Output() onColorEmit(color: string) {
    this.emitColor.emit(color);
    localStorage.setItem('color', color);
    this.color = localStorage.getItem('color');
  }
  @Output() color = localStorage.getItem('color');
  colorsData = Object.values(colors);

  constructor() {}

  ngOnInit(): void {}
}
