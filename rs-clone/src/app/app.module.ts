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
    FormsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [NewserviceService,
  {
   provide: HTTP_INTERCEPTORS,
   multi: true,
   useClass: TokenInt,
  }],
  bootstrap: [AppComponent],
})
export class AppModule {}
