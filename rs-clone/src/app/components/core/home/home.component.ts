import { Component } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { BottomSheetComponent } from 'src/app/bottom-sheet/bottom-sheet.component';
import { ReminderSheetComponent } from 'src/app/reminder-sheet/reminder-sheet.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  panelOpenState = false;
  constructor(private _bottomSheet: MatBottomSheet) {}

  openBottomSheet(): void {
    this._bottomSheet.open(BottomSheetComponent);
  }
  openReminderSheet(): void {
    this._bottomSheet.open(ReminderSheetComponent);
  }

}
