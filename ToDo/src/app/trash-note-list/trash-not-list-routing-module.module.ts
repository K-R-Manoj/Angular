import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrashNoteListComponent } from './trash-note-list.component';




const routes: Routes = [
  {
    path: '',

    component: TrashNoteListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrashNoteListRoutingModule{}