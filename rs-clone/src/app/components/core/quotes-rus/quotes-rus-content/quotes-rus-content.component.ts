import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-quotes-rus-content',
  templateUrl: './quotes-rus-content.component.html',
  styleUrls: ['./quotes-rus-content.component.css'],
})
export class QuotesRusContentComponent {
  @Input() author!: string;
  @Input() quote!: string;
  @Input() getNewQuote!: () => void;

  constructor() {}
}
