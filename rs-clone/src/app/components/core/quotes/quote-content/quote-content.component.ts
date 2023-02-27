import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-quote-content',
  templateUrl: './quote-content.component.html',
  styleUrls: ['./quote-content.component.css'],
})
export class QuoteContentComponent {
  @Input() author!: string;
  @Input() quote!: string;
  @Input() tweetURL!: string;
  @Input() getNewQuote!: () => void;

  constructor() {}
}
