import { Component, Input, OnInit } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {  
  }
  showFiller = false;

  changeInToggle(value:boolean, part:MatDrawer)
  {
      console.log(value,"this is the toggleValue");
      part.toggle()
  }

  

 
}
