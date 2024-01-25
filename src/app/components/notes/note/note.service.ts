import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Note } from './note';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NoteService {
  private readonly API = 'https://json-server-cvrq.onrender.com/notes';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Note[]> {
    return this.http.get<Note[]>(this.API);
  }

  createNote(note: Note): Observable<Note> {
    return this.http.post<Note>(this.API, note);
  }

  findById(id: number): Observable<Note> {
    const url = `${this.API}/${id}`;
    return this.http.get<Note>(url);
  }

  delete(id: number): Observable<Note> {
    const url = `${this.API}/${id}`;
    return this.http.delete<Note>(url);
  }
}
