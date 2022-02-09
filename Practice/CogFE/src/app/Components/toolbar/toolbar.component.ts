import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  @Output() toggleValue= new EventEmitter<boolean>()
  
  value:boolean=false
  constructor() { }

  ngOnInit(): void {
  }
  onToggle()
  {
    this.value = !this.value
    this.toggleValue.emit(this.value)
  }
}
