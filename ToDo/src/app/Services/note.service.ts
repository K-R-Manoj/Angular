import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, Subject, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(private http:HttpClient) { }


  noteslistChanged = new Subject<any>();

  Notes:Array<object>=[];
  TrashNotes:object[]=[];

  serachstring:string='';
  sortItem:string='Title';
  sorttype:string='A-Z'



  search(value:string)
  {
    this.serachstring = value
    // console.log(this.serachstring);
  }
  
  getNotes()
  {
    // console.log("Haii");
    
    this.http.get("http://localhost:3000/notes").subscribe((response)=>{
      this.Notes.push(response) 

      console.log(response);
      
      this.noteslistChanged.next(this.Notes)
    })
  }



  addNote(value:any)
  {
    this.http.post("http://localhost:3000/notes", value).subscribe((response:any)=>{  
    })
    this.getNotes()
    this.noteslistChanged.next(this.Notes)
    // console.log(this.Notes);
    
  }

 

  deleteNote(value:any)
  {
    let params = new HttpParams();
    params = params.append('itemId', value);
    this.addtrashnote(value)
    console.log(value);
    
    return this.http.delete("http://localhost:3000/notes/"+value._id).subscribe((response)=>{
      console.log(response);
    })

  }

  updateNote(value:any)
  {
   
    return this.http.patch("http://localhost:3000/notes", value)
    
  }
  
  
  addtrashnote(value:any)
  {
    
    // console.log(value);
    
    this.http.post("http://localhost:3000/trash",value).subscribe((response)=>{
      // console.log(response);
      
    })

  }

  getTrashNotes()
  {
    this.http.get("http://localhost:3000/trash").subscribe((response)=>{
      this.TrashNotes.push(response) 
      // console.log(response);
      
    })
  }

  deleteTrashNote(value:any)
  {
    let params = new HttpParams();
    params = params.append('itemId', value);
    return this.http.delete("http://localhost:3000/trash/"+value._id).subscribe((response)=>{
      console.log(response);
    })
  }

  RetriveTrashNotetoNote(value:any)
  {
    this.addNote(value)
    this.deleteTrashNote(value)
  }

}
