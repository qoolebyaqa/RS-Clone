import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
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
import { NewserviceService } from './newservice.service';
import { NotificationsComponent } from './components/core/notifications/notifications.component';
import { HeaderComponent } from './components/core/header/header.component';
import { QuotesComponent } from './components/core/quotes/quotes.component';
import { ButtonNewComponent } from './components/core/quotes/button-new/button-new.component';
import { QuoteContentComponent } from './components/core/quotes/quote-content/quote-content.component';
import { QuotesRusComponent } from './components/core/quotes-rus/quotes-rus.component';
import { QuotesRusContentComponent } from './components/core/quotes-rus/quotes-rus-content/quotes-rus-content.component';
import { NavComponent } from './components/nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { SpaceComponent } from './components/core/space/space.component';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './components/core/footer/footer.component';
import { LoginComponent } from './components/core/login/login.component';
import { TokenInt } from './classes/interfaces/token.inceptor';
import { ProfilePageComponent } from './components/core/profile-page/profile-page.component';
import { UpdFormComponent } from './components/core/upd-form/upd-form.component';
import { DragDropComponent } from './components/core/notifications/drag-drop/drag-drop.component';
import { InfoBlockComponent } from './components/core/info-block/info-block.component';
import { BoardItemComponent } from './components/core/notifications/drag-drop/board-item/board-item.component';
import { ColorPanelComponent } from './components/core/notifications/drag-drop/color-panel/color-panel.component';
import { CommentItemComponent } from './components/core/notifications/drag-drop/comment-item/comment-item.component';
import { DialogComponent } from './components/core/notifications/drag-drop/component/dialog/dialog.component';
import { DialogBodyComponent } from './components/core/notifications/drag-drop/component/dialog-body/dialog-body.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDialogModule } from '@angular/material/dialog';
import { HeaderBlockComponent } from './components/core/notifications/drag-drop/header-block/header-block.component';
import { Game1Component } from './components/core/right-section/game1/game1.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RightSectionComponent,
    CalendarComponent,
    AgendaComponent,
    MentionesComponent,
    TaskPopUpComponent,
    NotificationsComponent,
    HeaderComponent,
    QuotesComponent,
    ButtonNewComponent,
    QuoteContentComponent,
    QuotesRusComponent,
    QuotesRusContentComponent,
    NavComponent,
    SpaceComponent,
    FooterComponent,
    LoginComponent,
    ProfilePageComponent,
    UpdFormComponent,
    DragDropComponent,
    InfoBlockComponent,
    BoardItemComponent,
    ColorPanelComponent,
    CommentItemComponent,
    DialogComponent,
    DialogBodyComponent,
    HeaderBlockComponent,
    Game1Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    CommonModule,
    DragDropModule,
    MatExpansionModule,
    MatDialogModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    NewserviceService,
    {
      provide: HTTP_INTERCEPTORS,
      multi: true,
      useClass: TokenInt,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
