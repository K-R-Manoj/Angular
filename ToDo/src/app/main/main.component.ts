import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  selectedSideValue:string='NoteList';
  value = '';

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(value:string)
  {
    this.selectedSideValue = value
  }


}
