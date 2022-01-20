import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SearchPipe } from "./search.pipe";
import { SortPipe } from "./sort.pipe";

@NgModule({
    declarations:[
        SortPipe,
        SearchPipe,
    ],
    imports:[
        CommonModule,
    ],
    exports:[

        SortPipe,
        SearchPipe
    ],

})
export class SharedModule{

}