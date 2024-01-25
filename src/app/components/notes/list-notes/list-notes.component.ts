import { Component, OnInit } from '@angular/core';
import { NoteService } from '../note/note.service';
import { Note } from '../note/note';

@Component({
  selector: 'app-list-notes',
  templateUrl: './list-notes.component.html',
  styleUrls: ['./list-notes.component.css'],
})
export class ListNotesComponent implements OnInit {
  listNotes: Note[] = [];
  constructor(private service: NoteService) {}
  ngOnInit(): void {
    this.service.getAll().subscribe((listNotes) => {
      this.listNotes = listNotes.reverse();
    });
  }
}
