import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Note } from './note';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NoteService {
  private readonly API = 'https://json-server-henna-nu.vercel.app/notes';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Note[]> {
    return this.http.get<Note[]>(this.API);
  }

  createNote(note: Note): Observable<Note> {
    return this.http.post<Note>(this.API, note);
  }
}
