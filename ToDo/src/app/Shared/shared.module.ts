import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CustomErrorComponent } from "./Components/custom-error/custom-error.component";
import { Note } from "./Models/NoteModel/note";
import { ReciveNotes } from "./Models/recive-notes";
import { SearchPipe } from "./Pipes/search.pipe";
import { SortPipe } from "./Pipes/sort.pipe";
import { ToolbarComponent } from './Components/toolbar/toolbar.component';
import { SidenavComponent } from './Components/sidenav/sidenav.component';
import { MaterialModule } from "../material.module";


@NgModule({
    declarations:[
        SortPipe,
        SearchPipe,
        CustomErrorComponent,
        ToolbarComponent,
        SidenavComponent,

    ],
    imports:[
        CommonModule,
        MaterialModule
    ],
    exports:[

        SortPipe,
        SearchPipe,
        CustomErrorComponent,
    ],

})
export class SharedModule{

}