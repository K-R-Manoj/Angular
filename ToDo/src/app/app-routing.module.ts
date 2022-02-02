import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomErrorComponent } from './Shared/Components/custom-error/custom-error.component';


const routes: Routes = [
  { path:'', component:CustomErrorComponent, pathMatch:'full'},
  {path:'Home', loadChildren:()=>import('./Modules/home/home.module').then(m=>m.HomeModule)},
  // {path:'Trash' , loadChildren: () => import('./trash-note-list/trash-note-list.module').then(m => m.TrashNoteListModule) },
  // {path:'Notes' ,  loadChildren: () => import('./note-list/note-list.module').then(m => m.NoteListModule) },
  {path:'**' , component:CustomErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
