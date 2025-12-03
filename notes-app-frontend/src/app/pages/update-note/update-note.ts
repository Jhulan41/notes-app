import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { NoteService } from '../../services/note.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-update-note',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './update-note.html',
  styleUrls: ['./update-note.css'],
})
export class UpdateNoteComponent implements OnInit {

  id!: number;
  note: any = {
    title: '',
    content: ''
  };

  constructor(
    private route: ActivatedRoute,
    private noteService: NoteService,
    private router: Router
  ) {}

  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.loadNote();
  }

  loadNote() {
    this.noteService.getNoteById(this.id).subscribe({
      next: (data) => {
        this.note = data;
      },
      error: (err) => {
        console.error("Failed to load note", err);
      }
    });
  }

  updateNote() {
    this.noteService.updateNote(this.id, this.note).subscribe({
      next: () => {
        alert("Note updated!");
        this.router.navigate(['/notes']);
      },
      error: (err) => {
        console.error("Update failed", err);
      }
    });
  }
}
