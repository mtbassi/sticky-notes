import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css'],
})
export class NoteComponent {
  @Input() note = {
    id: "",
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