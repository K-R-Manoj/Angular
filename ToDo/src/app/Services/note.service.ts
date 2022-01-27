import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, Observable, Subject, throwError } from 'rxjs';
import { Note } from '../Common/Models/NoteModel/note';
import { ReciveNotes } from '../Common/Models/recive-notes';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(private http:HttpClient, private router :Router) { }

  noteslistChanged = new Subject<any>();

  Notes:ReciveNotes[]=[];
  TrashNotes:ReciveNotes[]=[];

  serachstring:string='';
  sortItem:string='Title';
  sorttype:string='A-Z'



  search(value:string)
  {
    this.serachstring = value
    // console.log(this.serachstring);
  }

  // ___________________________________________Notes________________________________________________________________
  
  getNotes()
  {
    this.http.get("http://localhost:3000/notes").subscribe((response:any)=>{
      this.Notes = response;
      // console.log(response);
      this.noteslistChanged.next(this.Notes)
    })
  }

  addNote(value:Note)
  {
    this.http.post("http://localhost:3000/notes", value).subscribe((response:any)=>{  
    })
    this.getNotes()
    this.noteslistChanged.next(this.Notes)
    // console.log(this.Notes);
    
  }

  updateNote(value:Note)
  {
    return this.http.patch("http://localhost:3000/notes", value)
  }

  deleteNote(value:any)
  {
    let params = new HttpParams();
    params = params.append('itemId', value);
    this.addtrashnote(value)
    // console.log(value);
    
    this.http.delete("http://localhost:3000/notes/"+value._id).subscribe((response)=>{
      // console.log(response);
    })
    this.Notes = this.Notes.filter(note=> note._id!== value._id)
    this.noteslistChanged.next(this.Notes)
  }
  
  // ____________________________Trash___________________________________________________
  
  getTrashNotes()
  {
    this.http.get("http://localhost:3000/trash").subscribe((response:any)=>{
      // console.log(response);
      this.TrashNotes = response;
      this.noteslistChanged.next(this.TrashNotes)
      
    })
  }

  addtrashnote(value:ReciveNotes)
  {
    // console.log(value);
    this.http.post("http://localhost:3000/trash",value).subscribe((response)=>{
      // console.log(response);
    })
  }


  deleteTrashNote(value:any)
  {
    let params = new HttpParams();
    params = params.append('itemId', value);
    this.http.delete("http://localhost:3000/trash/"+value._id).subscribe((response)=>{
      // console.log(response);
    })
    this.TrashNotes  = this.TrashNotes.filter(TN=>TN._id!==value._id)
    this.noteslistChanged.next(this.TrashNotes)
  }

  RetriveTrashNotetoNote(value:ReciveNotes)
  {
    this.deleteTrashNote(value)
    this.addNote(value)
    this.router.navigate(['./Notes'])
  }

}
