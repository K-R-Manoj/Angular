import { Component, Input, OnInit } from '@angular/core';
import { NoteService } from 'src/app/Services/note.service';

@Component({
  selector: 'app-trash-note',
  templateUrl: './trash-note.component.html',
  styleUrls: ['./trash-note.component.css']
})
export class TrashNoteComponent implements OnInit {

  @Input() Tnote:any;

  constructor(private noteservice:NoteService) { }

  ngOnInit(): void {
   
    
  }
  onDelete()
  {
    this.noteservice.deleteTrashNote(this.Tnote)
  }

  onRetrive()
  {
    this.noteservice.RetriveTrashNotetoNote(this.Tnote)
    
  }
}
