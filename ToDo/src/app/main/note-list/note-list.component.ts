import { Component, OnInit } from '@angular/core';
import { Note } from 'src/app/Models/NoteModel/note';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})
export class NoteListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  notes:Note[] = [
    new Note('Shopping','Home','buy some eggs for dinner','Red'),
    new Note('Project','Work','complete the Project within the given time','Yellow'),
    new Note('Exercise','Personal','Do some exercise in the Morning','coral'),
    new Note('ReBranding','Work','do the ReBranding of the website  for the given Company','Blue'),
    new Note('Trip','Others','Akshay and chirag is not coming for the Trip with us','Pink'),
   
  ];

}
