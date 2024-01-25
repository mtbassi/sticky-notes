import { Component, OnInit } from '@angular/core';
import { Note } from '../note/note';
import { NoteService } from '../note/note.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.css'],
})
export class CreateNoteComponent implements OnInit {
  constructor(private service: NoteService, private router: Router) {}
  ngOnInit(): void {}

  note: Note = {
    content: '',
    authorship: '',
  };

  createNote() {
    this.service
      .createNote(this.note)
      .subscribe(() => this.router.navigate(['/notes']));
  }

  discardNote() {
    this.note.content = '';
    this.note.authorship = '';
  }
}
