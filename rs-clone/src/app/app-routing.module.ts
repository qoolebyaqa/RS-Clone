import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/core/home/home.component';
import { NotificationsComponent } from './components/core/notifications/notifications.component';
import { SpaceComponent } from './components/core/space/space.component';
import { ProfilePageComponent } from './components/core/profile-page/profile-page.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'notifications', component: NotificationsComponent},
  {path: 'space', component: SpaceComponent},
  {path: 'profile-page', component: ProfilePageComponent},
  {path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
