import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NoteListComponent } from './main/note-list/note-list.component';

import { TrashNoteListComponent } from './main/trash-note-list/trash-note-list.component';

const routes: Routes = [
  { path:'', redirectTo:'Notes', pathMatch:'full'},
  {path:'Notes' , component:NoteListComponent},
  {path:'Trash' , component:TrashNoteListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
