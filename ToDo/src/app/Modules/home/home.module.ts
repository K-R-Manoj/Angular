import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { NoteListModule } from '../note-list/note-list.module';
import { SharedModule } from 'src/app/Shared/shared.module';
import { TrashNoteListModule } from '../trash-note-list/trash-note-list.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home.component';
import { MaterialModule } from 'src/app/material.module';

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
    MaterialModule,

    FlexLayoutModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class HomeModule  { 

}
