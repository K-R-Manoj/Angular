import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router, RouterLinkActive } from "@angular/router";
import { map, Observable, shareReplay } from "rxjs";
import { NoteService } from "../../Core/Services/note.service";

@Component({
    selector: 'app-Home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit
{
  filtredStatus:string ='';
    constructor(public noteservice:NoteService,private breakpointObserver: BreakpointObserver , private route:ActivatedRoute, private router:Router){

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
  
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches),
    shareReplay()
  );
  // OnNotes()
  // {
  //   this.router.navigate(['Notes'],{relativeTo:this.route},)
  // }
  // OnTrash()
  // {
  //   this.router.navigate(['Trash'],{relativeTo:this.route})
  // }
}