import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/Services/note.service';

@Component({
  selector: 'app-trash-note-list',
  templateUrl: './trash-note-list.component.html',
  styleUrls: ['./trash-note-list.component.css']
})
export class TrashNoteListComponent implements OnInit {

  constructor(public noteService:NoteService) { }

  TrashNotes:any

  ngOnInit(): void {

      this.noteService.getTrashNotes()

      this.TrashNotes = this.noteService.TrashNotes

      
      

  }

}
