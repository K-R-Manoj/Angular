import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/Shared/shared.module";
import { TrashNoteListRoutingModule } from "./trash-not-list-routing-module.module";
import { FlexLayoutModule } from "@angular/flex-layout";
import { TrashNoteListComponent } from "./trash-note-list.component";
import { TrashNoteComponent } from "./trash-note/trash-note.component";
import { MaterialModule } from "src/app/material.module";

@NgModule({
    declarations:[
        TrashNoteListComponent,
        TrashNoteComponent,
    ],

    imports:[
        CommonModule,

        MaterialModule,

        FlexLayoutModule,
        SharedModule,
        TrashNoteListRoutingModule,   
    ]
})
export class TrashNoteListModule
{

}