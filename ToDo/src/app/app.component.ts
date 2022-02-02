import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { NoteService } from './Core/Services/note.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ToDo';
  // filtredStatus:string ='';

  // constructor(public noteservice:NoteService,private breakpointObserver: BreakpointObserver){ }
  constructor(){}

  ngOnInit(): void { }

  // sortTitle(value:string)
  // {
  //   this.noteservice.sortItem = 'Title';
  //   this.noteservice.sorttype = value;
  // }
  // sortTime(value:string)
  // {
  //   this.noteservice.sortItem = 'createdAt';
  //   this.noteservice.sorttype = value;
  // }
  
  // isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  // .pipe(
  //   map(result => result.matches),
  //   shareReplay()
  // );

}
