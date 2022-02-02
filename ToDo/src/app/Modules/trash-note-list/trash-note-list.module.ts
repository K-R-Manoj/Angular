import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { SharedModule } from "src/app/Shared/Pipes/shared.module";
import { TrashNoteListRoutingModule } from "./trash-not-list-routing-module.module";

import { FlexLayoutModule } from "@angular/flex-layout";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";

import { TrashNoteListComponent } from "./trash-note-list.component";
import { TrashNoteComponent } from "./trash-note/trash-note.component";


@NgModule({
    declarations:[
        TrashNoteListComponent,
        TrashNoteComponent,
     
    ],

    imports:[
        CommonModule,

        MatCardModule,
        MatIconModule,
        MatButtonModule,

        FlexLayoutModule,
        SharedModule,
        TrashNoteListRoutingModule,
       
    ]
})
export class TrashNoteListModule
{

}