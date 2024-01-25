import { Component } from '@angular/core';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.css'],
})
export class CreateNoteComponent {
  note = {};
  createNote() {
    alert('Novo pensamento criado');
  }
  discardNote() {
    alert('Novo pensamento criado');
  }
}
