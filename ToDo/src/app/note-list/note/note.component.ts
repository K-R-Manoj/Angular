import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';

import { DialogboxComponent } from 'src/app/Common/dialogbox/dialogbox.component';
import { Note } from 'src/app/Models/NoteModel/note';
import { NoteService } from 'src/app/Services/note.service';



@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {

  @Input() note : any;

  b:Date|undefined
  constructor(public dialog: MatDialog, public noteService:NoteService) { }

  ngOnInit(): void {
      // console.log("this is note",this.note);
      // console.log(Date);
      
      // console.log("this is note",this.note.createdAt); 
      
  }
  onUpdate()
  { 
   this.dialog.open(DialogboxComponent,{data:{togglevalue:'EDIT', notevalue:this.note}});  
  }

  onDelete()
  {
    this.noteService.deleteNote(this.note)
  }
 
 
} 
