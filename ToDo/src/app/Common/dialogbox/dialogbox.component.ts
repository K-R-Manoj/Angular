import { Component, OnInit, ViewChild, Inject, ElementRef} from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Note } from 'src/app/Models/NoteModel/note';
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
        // 'ID':new FormControl( "hdajsdhasdhkhhkasdhkasd"),
        'Title':new FormControl(null, Validators.required),
        'Tag':new FormControl(null,Validators.required),
        'Description': new FormControl(null,[Validators.required,Validators.maxLength(250)]),
        'Color':new FormControl(null, Validators.required),
        // 'CreatedAt':new FormControl( new Date())
      });

    }

   
    
    if(this.data.togglevalue === 'EDIT')
    {
      this.toggle = this.data.togglevalue
      // console.log(this.toggle , this.data.notevalue);
      // this.id = this.data.notevalue.ID;
      this.id = this.data.notevalue
      // console.log(this.id._id);
      
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








  GenerateRandomId()
  {
    return '_' + Math.random().toString(36).substr(2, 9);
  }
  

  onAddNoteSubmit()  
  {
    // console.log(this.Addfrom?.value);
    // this.noteService.addNote(this.Addfrom?.value)

    // console.log(this.AddNotesForm.value);
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
 
    console.log(upnote.ID);
    
    this.noteService.updateNote(upnote).subscribe((response:any)=>{
      console.log(response);
      this.noteService.getNotes()   
    })
    // this.noteService.getNotes()
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
      console.log(this.count);
      
    }
    
  }


}



