import { Component, OnInit } from '@angular/core';
interface QuoteRus {
  quote: string;
  author: string;
}
@Component({
  selector: 'app-quotes-rus',
  templateUrl: './quotes-rus.component.html',
  styleUrls: ['./quotes-rus.component.css'],
})
export class QuotesRusComponent implements OnInit {
  loading: boolean = true;
  quote!: QuoteRus;
  quoteList!: QuoteRus[];
  getNewQuote: () => void = (): void => {
    const idx = Math.floor(Math.random() * this.quoteList.length);
    const newQuote = this.quoteList[idx];
    this.quote = newQuote;
  };
  constructor() {}
  ngOnInit() {
    this.fetchData();
  }
  async fetchData(): Promise<void> {
    const quotesURL =
      'https://gist.githubusercontent.com/nasrulhazim/54b659e43b1035215cd0ba1d4577ee80/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';
    const response = await fetch(quotesURL);
    const quotes = await response.json();
    const idx = Math.floor(Math.random() * quotes.quotes.length);
    const newQuote = quotes.quotes[idx];
    this.quoteList = quotes.quotes;
    this.quote = newQuote;
    this.loading = false;
  }
}
