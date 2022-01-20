import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatDialog, MatDialogModule } from "@angular/material/dialog";
import { MatIconModule } from "@angular/material/icon";
import {  SharedModule } from "../Common/Pipes/shared.module";
import { NoteListRoutingModule } from "./note-list-routingmodule.module";



import { NoteListComponent } from "./note-list.component";
import { NoteComponent } from "./note/note.component";


@NgModule({
    declarations:[
        NoteListComponent,
        NoteComponent,

    
    ],
    imports:[
  
        CommonModule,

        MatCardModule,
        MatIconModule,
        MatButtonModule,
        MatDialogModule,

        FlexLayoutModule,
        SharedModule,
        NoteListRoutingModule,

    ],
  

})
export class NoteListModule
{

}