import { Component, EventEmitter, OnInit, Output } from '@angular/core';

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
