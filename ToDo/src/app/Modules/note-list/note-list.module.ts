import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { SharedModule } from "src/app/Shared/Pipes/shared.module";
import { NoteListRoutingModule } from "./note-list-routingmodule.module";

import { FlexLayoutModule } from "@angular/flex-layout";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatDialog, MatDialogModule } from "@angular/material/dialog";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";

import { DialogboxComponent } from "./dialogbox/dialogbox.component";
import { NoteListComponent } from "./note-list.component";
import { NoteComponent } from "./note/note.component";








@NgModule({
    declarations:[
        NoteListComponent,
        NoteComponent,
        DialogboxComponent,

    
    ],
    imports:[
  
        CommonModule,

        MatCardModule,
        MatIconModule,
        MatButtonModule,
        MatDialogModule,
        ReactiveFormsModule,
        FormsModule,
        MatInputModule,
        MatFormFieldModule,
        MatSelectModule,
        

        FlexLayoutModule,
        SharedModule,
        NoteListRoutingModule,



    ],
  

})
export class NoteListModule
{

}