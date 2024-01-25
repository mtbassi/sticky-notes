import { Component, OnInit } from '@angular/core';
import { Note } from '../note/note';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.css'],
})
export class CreateNoteComponent implements OnInit {
  ngOnInit(): void {}

  note: Note = {
    id: 0,
    content: '',
    authorship: '',
  };

  createNote() {
    alert('Novo pensamento criado');
  }

  discardNote() {
    alert('Novo pensamento criado');
  }
}
