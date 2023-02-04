import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { HomeComponent } from './components/core/home/home.component';
import { RightSectionComponent } from './components/core/right-section/right-section.component';
import { CalendarComponent } from './components/core/right-section/calendar/calendar.component';
import { AgendaComponent } from './components/core/right-section/agenda/agenda.component';
import { MentionesComponent } from './components/core/right-section/mentiones/mentiones.component';
import { TaskPopUpComponent } from './components/core/right-section/task-pop-up/task-pop-up.component';
import { BottomSheetComponent } from './bottom-sheet/bottom-sheet.component';
import { ReminderSheetComponent } from './reminder-sheet/reminder-sheet.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RightSectionComponent,
    CalendarComponent,
    AgendaComponent,
    MentionesComponent,
    TaskPopUpComponent,
    BottomSheetComponent,
    ReminderSheetComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
