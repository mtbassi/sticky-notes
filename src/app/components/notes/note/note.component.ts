import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css'],
})
export class NoteComponent {
  @Input() note = {
    id: null,
    content: 'Quem ta lendo me deve o button',
    authorship: 'Bassi',
  };
}
