import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { NoteService } from '../../services/note.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-note',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './create-note.html',
  styleUrls: ['./create-note.css']
})
export class CreateNoteComponent {

  noteForm!: FormGroup;

  constructor(private fb: FormBuilder, private noteService: NoteService, private router: Router) {
    this.noteForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
      content: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(2000)]]
    });
  }

  createNote() {
    if (this.noteForm.invalid) return;

    this.noteService.createNote(this.noteForm.value).subscribe({
      next: () => this.router.navigate(['/notes']),
      error: (err) => console.error('Failed to create note', err)
    });
  }

  get f() {
    return this.noteForm.controls;
  }
}
