import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NoteService } from '../../services/note.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-note',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './create-note.html',
  styleUrl: './create-note.css',
})
export class CreateNoteComponent {

  note = {title: '', content: ''};

  constructor(
    private noteService: NoteService,
    private router: Router
  ){}

  createNote(){
    this.noteService.createNote(this.note).subscribe({
      next: () =>{
        this.router.navigate(['/notes']);
      },
      error: (err) =>{
        console.error("Create failed", err);
      }
    })
  }

}
