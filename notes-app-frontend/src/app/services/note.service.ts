import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NoteService {

  private baseUrl = 'http://localhost:8080/api/notes';

  constructor(private http: HttpClient) {}

  getAllNotes(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }

  createNote(note: any): Observable<any> {
    return this.http.post<any[]> (`${this.baseUrl}/newnote`, note);
  } 

  getNoteById(id: number): Observable<any> {
  return this.http.get<any>(`${this.baseUrl}/${id}`);
}

updateNote(id: number, note: any): Observable<any> {
  return this.http.put<any>(`${this.baseUrl}/${id}`, note);
}

deleteNote(id: number): Observable<any> {
  return this.http.delete(`${this.baseUrl}/${id}`);
}


  
}
