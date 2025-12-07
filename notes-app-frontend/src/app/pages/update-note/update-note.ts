import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NoteService } from '../../services/note.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-update-note',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './update-note.html',
  styleUrls: ['./update-note.css'],
})
export class UpdateNoteComponent implements OnInit {

  noteForm!: FormGroup;
  noteId!: number;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private noteService: NoteService
  ) {}

  ngOnInit(): void {
    this.noteId = Number(this.route.snapshot.paramMap.get('id'));

    this.noteForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
      content: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(2000)]]
    });

    this.loadNoteData();
  }

  loadNoteData() {
    this.noteService.getNoteById(this.noteId).subscribe(note => {
      this.noteForm.patchValue({
        title: note.title,
        content: note.content
      });
    });
  }

  updateNote() {
    if (this.noteForm.invalid) {
      this.noteForm.markAllAsTouched();
      return;
    }

    this.noteService.updateNote(this.noteId, this.noteForm.value).subscribe(() => {
      alert("Note updated successfully!");
      this.router.navigate(['/notes']);
    });
  }
}
