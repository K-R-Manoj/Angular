import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { NoteListModule } from '../note-list/note-list.module';
import { SharedModule } from 'src/app/Shared/Pipes/shared.module';
import { TrashNoteListModule } from '../trash-note-list/trash-note-list.module';
 
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HomeComponent } from './home.component';




@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
   
   

    NoteListModule,
    TrashNoteListModule,
    SharedModule,

    MatDividerModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    FormsModule,
   
  ]
})
export class HomeModule  { 

}
