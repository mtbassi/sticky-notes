import { Component, OnInit } from '@angular/core';
import { Note } from '../note/note';
import { NoteService } from '../note/note.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-note',
  templateUrl: './edit-note.component.html',
  styleUrls: ['./edit-note.component.css']
})
export class EditNoteComponent implements OnInit {
  note: Note = {
    id: 0,
    content: '',
    authorship: '',
  };

  constructor(
    private service: NoteService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.findById(parseInt(id!)).subscribe((note) => {
      this.note = note;
    });
  }

  editNote() {
    if (this.note.id) {
      this.service.editNote(this.note).subscribe(() => {
        this.router.navigate(['/notes']);
      });
    }
  }

  cancelEdit() {
    this.router.navigate(['/notes']);
  }
}
