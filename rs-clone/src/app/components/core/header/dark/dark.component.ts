import { Component } from '@angular/core';
import { ThemeService } from './theme.service';
@Component({
  selector: 'app-dark',
  templateUrl: './dark.component.html',
  styleUrls: ['./dark.component.scss'],
})
export class DarkComponent {
  get dark() {
    return this.themeService.theme === 'dark';
  }

  set dark(enabled: boolean) {
    this.themeService.theme = enabled ? 'dark' : null!;
  }

  constructor(private themeService: ThemeService) {}
}
