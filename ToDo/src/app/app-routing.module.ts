import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuardGuard } from './Core/Guards/Auth/authentication-guard.guard';
import { CustomErrorComponent } from './Shared/Components/custom-error/custom-error.component';


const routes: Routes = [
  { path:'', redirectTo:'callback', pathMatch:'full'},
  {path:'Home', loadChildren:()=>import('./Modules/home/home.module').then(m=>m.HomeModule), canActivate:[AuthenticationGuardGuard]},
  // {path:'Trash' , loadChildren: () => import('./trash-note-list/trash-note-list.module').then(m => m.TrashNoteListModule) },
  // {path:'Notes' ,  loadChildren: () => import('./note-list/note-list.module').then(m => m.NoteListModule) },
  {path:'**' , redirectTo:'callback'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
