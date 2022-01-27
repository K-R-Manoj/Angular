import { Component, OnInit, ViewChild, Inject, ElementRef} from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Note } from '../../Common/Models/NoteModel/note';
import { NoteService } from 'src/app/Services/note.service';

interface Tag {
  value: string;
  viewValue: string;
}

interface Color {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-dialogbox',
  templateUrl: './dialogbox.component.html',
  styleUrls: ['./dialogbox.component.css']
})
export class DialogboxComponent implements OnInit {

  Tags: Tag[] = [
    {value: 'Work', viewValue: 'Work'},
    {value: 'Personal', viewValue: 'Personal'},
    {value: 'Home', viewValue: 'Home'},
    {value: 'Others', viewValue: 'Others'},
  ];

  Colors: Color[] = [
    {value: '#f28b82', viewValue: 'Light Red'},
    {value: '#fbbc04', viewValue: 'LightOrange'},
    {value: '#fff475', viewValue: 'Light Yellow'},
    {value: '#ccff90', viewValue: 'Light Green'},
    {value: '#a7ffeb', viewValue: 'Light Teal'},
    {value: '#d7aefb', viewValue: 'Light Purple'},
  ];

  @ViewChild('f') Addfrom : NgForm|undefined;
  @ViewChild('E') Updatefrom : NgForm|undefined;
  @ViewChild('DescCount') desccount :ElementRef|undefined;


  toggle:string |undefined;
  title:string|undefined;
  tag:string|undefined;
  desc:string|undefined;
  color:string|undefined;
  id:any;
  time:string|undefined;
  count:number=0;


  AddNotesForm:FormGroup|any;

  constructor(private noteService :NoteService, @Inject(MAT_DIALOG_DATA) public data: {togglevalue: string , notevalue:Note}) { }

  ngOnInit(): void {

    if(this.data.togglevalue==="ADD")
    {
      this.AddNotesForm = new FormGroup({
        'Title':new FormControl(null, Validators.required),
        'Tag':new FormControl(null,Validators.required),
        'Description': new FormControl(null,[Validators.required,Validators.maxLength(250)]),
        'Color':new FormControl(null, Validators.required),
      });
    }

    
    if(this.data.togglevalue === 'EDIT')
    {
      this.toggle = this.data.togglevalue
      this.id = this.data.notevalue 
      this.title = this.data.notevalue.Title;
      this.tag = this.data.notevalue.Tag;
      this.desc = this.data.notevalue.Description;
      this.color = this.data.notevalue.Color;
    }
    else
    {
      this.toggle = this.data.togglevalue
    }
  }


  onAddNoteSubmit()  
  {
    this.noteService.addNote(this.AddNotesForm.value)
  }

  onUpdateNoteSubmit()
  {
    const upnote = {
      ID:this.id._id,
      Title:this.Updatefrom?.value.Title,
      Tag:this.Updatefrom?.value.Tag,
      Description:this.Updatefrom?.value.Description,
      Color:this.Updatefrom?.value.Color,
    }
    // console.log(upnote.ID);
    this.noteService.updateNote(upnote).subscribe((response)=>{
      // console.log(response.);
        this.noteService.getNotes()   
    })
  }

  onDelete()
  {
    const ID:string =this.id._id
    this.noteService.deleteNote(ID)
  }

  charCount()
  {
    if(this.desccount)
    {
      this.count = this.desccount.nativeElement.value.length
    } 
  }


}




