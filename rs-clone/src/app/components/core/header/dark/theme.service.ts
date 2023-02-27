import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  get theme(): string {
    return document.documentElement.getAttribute('theme')!;
  }

  set theme(name: string) {
    document.documentElement.setAttribute('theme', name);
  }
  constructor() {}
}
