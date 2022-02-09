import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/Shared/shared.module";
import { NoteListRoutingModule } from "./note-list-routingmodule.module";
import { FlexLayoutModule } from "@angular/flex-layout";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { DialogboxComponent } from "./dialogbox/dialogbox.component";
import { NoteListComponent } from "./note-list.component";
import { NoteComponent } from "./note/note.component";
import { MaterialModule } from "src/app/material.module";

@NgModule({
    declarations:[
        NoteListComponent,
        NoteComponent,
        DialogboxComponent,
    ],
    imports:[

        CommonModule,
        MaterialModule,
        
        ReactiveFormsModule,
        FormsModule,

        FlexLayoutModule,
        SharedModule,
        NoteListRoutingModule,
    ],
})
export class NoteListModule
{

}