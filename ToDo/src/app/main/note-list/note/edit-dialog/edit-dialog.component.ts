import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Note } from 'src/app/Models/NoteModel/note';

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.css']
})
export class EditDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data:Note) { }

  ngOnInit(): void {
  }

  title = this.data.Title;
  selected = this.data.Tag;
  desc = this.data.Description;
  color = this.data.Color;
}
