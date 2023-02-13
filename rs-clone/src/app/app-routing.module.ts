import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Guards } from './classes/interfaces/guards';
import { HomeComponent } from './components/core/home/home.component';
import { LoginComponent } from './components/core/login/login.component';
import { NotificationsComponent } from './components/core/notifications/notifications.component';
import { SpaceComponent } from './components/core/space/space.component';
import { ProfilePageComponent } from './components/core/profile-page/profile-page.component';

const routes: Routes = [
  {path: '', component: HomeComponent, canActivate: [Guards]},
  {path: 'profile-page', component: ProfilePageComponent, canActivate: [Guards]},
  {path: 'login', component: LoginComponent},
  {path: 'notifications', component: NotificationsComponent, canActivate: [Guards]},
  {path: 'space', component: SpaceComponent, canActivate: [Guards]},
  {path: '**', component: HomeComponent, canActivate: [Guards]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
