import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {NoteListModule} from './Modules/note-list/note-list.module';
import {TrashNoteListModule} from './Modules/trash-note-list/trash-note-list.module';
import {SharedModule} from './Shared/shared.module';

import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomErrorComponent } from './Shared/Components/custom-error/custom-error.component';
import { HomeModule } from './Modules/home/home.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { AuthenticationRoutingModule } from './authentication/authentication-routing.module';



@NgModule({
  declarations: [
    AppComponent,

    // CustomErrorComponent,
  
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    BrowserAnimationsModule,
    HttpClientModule,
    AuthenticationModule,
    AuthenticationRoutingModule,


    // NoteListModule,
    // TrashNoteListModule,
    // SharedModule,
    HomeModule,


    // MatDividerModule,
    // MatIconModule,
    // MatListModule,
    // MatMenuModule,
    // MatSidenavModule,
    // MatButtonModule,
    // MatToolbarModule,
    // FlexLayoutModule,
    // ReactiveFormsModule,
    // FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
