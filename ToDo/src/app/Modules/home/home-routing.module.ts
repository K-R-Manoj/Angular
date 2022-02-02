import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {path:'',component:HomeComponent, children:[
    {path:'Trash' , loadChildren: () => import('../trash-note-list/trash-note-list.module').then(m => m.TrashNoteListModule)},
    {path:'Notes' ,  loadChildren: () => import('../note-list/note-list.module').then(m => m.NoteListModule) },

  ]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
