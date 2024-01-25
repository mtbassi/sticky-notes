import { Component, Input } from '@angular/core';
import { Note } from './note';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css'],
})
export class NoteComponent {
  @Input() note: Note = {
    id: 0,
    content: "",
    authorship: "",
  };

  widthNote(): string {
    if(this.note.content.length >= 160){
      return 'note-g'
    }
    return 'note-p';
  }
}
