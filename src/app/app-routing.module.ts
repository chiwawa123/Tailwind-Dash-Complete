import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { MainComponent } from './Materials/main/main.component';
import { DashboardComponent } from './Materials/dashboard/dashboard.component';
import { AppointmentComponent } from './Materials/appointment/appointment.component';

const routes: Routes = [
  {
    path: 'main',
    component: MainComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      { path: 'appointment', component:AppointmentComponent}
    ],
  },
  { path: '', component:LoginComponent},
  { path: 'register', component:RegisterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
