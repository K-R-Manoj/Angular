import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { ActivatedRoute, Router, RouterLinkActive } from "@angular/router";
import { map, Observable, shareReplay } from "rxjs";
import { AuthServiceService } from "src/app/authentication/Services/auth-service.service";
import { NoteService } from "../../Core/Services/note.service";

@Component({
    selector: 'app-Home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  // encapsulation: ViewEncapsulation.None,
})
export class HomeComponent implements OnInit
{
  userProfileIcon:string='';
  user:any;
  UserName:string='';
  filtredStatus:string ='';
    constructor(public noteservice:NoteService,private breakpointObserver: BreakpointObserver , private route:ActivatedRoute, private router:Router, private authService:AuthServiceService){

    }
    ngOnInit(): void {
      this.user = localStorage.getItem("Session User")
      console.log(this.user);
      this.userProfileIcon = this.user.slice(0,1);
      this.UserName = this.user.substring(0,this.user.lastIndexOf("@"))
    }

    sortTitle(value:string)
  {
    this.noteservice.sortItem = 'Title';
    this.noteservice.sorttype = value;
  }
  sortTime(value:string)
  {
    this.noteservice.sortItem = 'Time';
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

  onLogOut()
  {
    this.authService.Logout()
  }
}