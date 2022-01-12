import { Component, OnInit } from '@angular/core';
interface Tag {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-add-dialog',
  templateUrl: './add-dialog.component.html',
  styleUrls: ['./add-dialog.component.css']
})
export class AddDialogComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  tags: Tag[] = [
    {value: 'work-0', viewValue: 'Work'},
    {value: 'personal-1', viewValue: 'Personal'},
    {value: 'home-2', viewValue: 'Home'},
    {value: 'other-3', viewValue: 'Others'},
  ];

  panelOpenState = false;
}
