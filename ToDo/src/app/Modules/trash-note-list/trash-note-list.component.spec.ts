import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrashNoteListComponent } from './trash-note-list.component';

describe('TrashNoteListComponent', () => {
  let component: TrashNoteListComponent;
  let fixture: ComponentFixture<TrashNoteListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrashNoteListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrashNoteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
