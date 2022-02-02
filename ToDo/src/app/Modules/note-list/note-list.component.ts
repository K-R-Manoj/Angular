import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subject, Subscription } from 'rxjs';
import { DialogboxComponent } from 'src/app/Modules/note-list/dialogbox/dialogbox.component';
import { Note } from 'src/app/Shared/Models/NoteModel/note';
import { NoteService } from 'src/app/Core/Services/note.service';



@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})
export class NoteListComponent implements OnInit {

  private notesChanged:Subscription|undefined;

  Notes:Array<any>= [];
    
  // searchstring:string=this.noteService.serachstring;

  constructor(public noteService :NoteService , public dialog: MatDialog) { 

  }

  ngOnInit(): void {
    
    // this.getAllNotes()
    // this.notesF.push(this.getAllNotes())
    // console.log("notelist",this.notesF);
    // console.log(this.notes);
    
    this.noteService.getNotes()
    this.Notes = this.noteService.Notes
    // console.log("this is note list", this.Notes);
    
    this.noteService.noteslistChanged.subscribe((value:any)=>{
      this.Notes = value
    }) 

    // this.searchstring=this.noteService.serachstring  
    
  }

  // notes:Note[] = this.noteService.getNotes()


  onAddNote()
  {
    const dialogRef = this.dialog.open(DialogboxComponent,{data:{togglevalue:'ADD'}});
  }

  // getAllNotes()
  // {
  //   this.noteService.getNotesF().subscribe((response:any)=>{
      
  //     // console.log(...response);
  //     this.abc =response

  //     // response.forEach((element: any) => {
  //     //     this.abc.push(element)
  //     // });

  //     // console.log(this.abc[0].Title+"this is abc in notelist");
      
  //     console.log(this.abc);
      
      
  //   })
  // }
  
  

}
