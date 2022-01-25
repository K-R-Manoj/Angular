import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path:'', redirectTo:'Notes', pathMatch:'full'},
  {path:'Notes' ,  loadChildren: () => import('./note-list/note-list.module').then(m => m.NoteListModule)},
  {path:'Trash' , loadChildren: () => import('./trash-note-list/trash-note-list.module').then(m => m.TrashNoteListModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
