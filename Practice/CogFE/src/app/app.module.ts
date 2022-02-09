import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { LoginComponent } from './Authentication/Pages/login/login.component';

import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthenticationRoutingModule } from './Authentication/Authentication Routing/authentication-routing.module';
import { AuthGaurdServiceService } from './Core/Services/Access/auth-gaurd-service.service';
import { SidebarComponent } from './Components/sidebar/sidebar.component';
import { ToolbarComponent } from './Components/toolbar/toolbar.component';
import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LoginComponent,
    SidebarComponent,
    ToolbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthenticationRoutingModule,
    HttpClientModule,

    MatProgressSpinnerModule,

    BrowserAnimationsModule,

    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
  ],
  providers: [AuthGaurdServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
