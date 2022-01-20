import { Component } from '@angular/core';
import { NoteService } from './Services/note.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  filtredStatus:string ='';
  title = 'ToDo';

  constructor(public noteservice:NoteService,private breakpointObserver: BreakpointObserver)
  {

  }
  ngOnInit(): void {
    
    
  }

  sortTitle(value:string)
  {
    this.noteservice.sortItem = 'Title';
    this.noteservice.sorttype = value;
  }
  sortTime(value:string)
  {
    this.noteservice.sortItem = 'createdAt';
    this.noteservice.sorttype = value;
  }
  
  getNotes()
  {
    this.noteservice.getNotes()
  }
  

  // responsive bar

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches),
    shareReplay()
  );

  
}
