import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { HeaderComponent } from './Layouts/header/header.component';
import { DashboardComponent } from './Materials/dashboard/dashboard.component';
import { MainComponent } from './Materials/main/main.component';
import { SidebarComponent } from './Layouts/sidebar/sidebar.component';
import { FooterComponent } from './Layouts/footer/footer.component';
import { AppointmentComponent } from './Materials/appointment/appointment.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    DashboardComponent,
    MainComponent,
    SidebarComponent,
    FooterComponent,
    AppointmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
