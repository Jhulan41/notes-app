// import { Component, OnInit } from '@angular/core';
// import { NoteService } from '../../services/note.service';
// import { CommonModule } from '@angular/common';
// import { RouterModule } from '@angular/router';

// @Component({
//   selector: 'app-notes-list',
//   standalone: true,
//   imports: [CommonModule, RouterModule],
//   templateUrl: './notes-list.html',
//   styleUrls: ['./notes-list.css'],

// })
// export class NotesListComponent implements OnInit{
//    notes: any[] = []; //store notes from backend

//    constructor(private noteService: NoteService){}

//    ngOnInit(): void {
//        this.loadNotes();
//    }
//   loadNotes() {
//      this.noteService.getAllNotes().subscribe({
//       next: (data) =>{
//         this.notes = data;
//       },
//       error: (err) =>{
//         console.error('Error loading notes', err);
//       }
//      });
//   }

//   deleteNote(id: number) {
//   this.noteService.deleteNote(id).subscribe({
//     next: () => {
//       this.loadNotes(); // refresh list
//     },
//     error: (err) => {
//       console.error('Delete failed', err);
//     }
//   });
// }


// }


 import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoteService } from '../../services/note.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-notes-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './notes-list.html',
  styleUrls: ['./notes-list.css'],
})
export class NotesListComponent implements OnInit {

  notes: any[] = [];

  constructor(private noteService: NoteService) {}

  ngOnInit() {
    this.loadNotes();
  }

  // ✅ FIXED: Proper loadNotes()
  loadNotes() {
    this.noteService.getAllNotes().subscribe({
      next: (data) => {
        this.notes = data;
      },
      error: (err) => {
        console.error('Error loading notes', err);
      }
    });
  }

  deleteNote(id: number) {
    this.noteService.deleteNote(id).subscribe({
      next: () => {
        this.loadNotes(); // refresh list
      },
      error: (err) => {
        console.error('Delete failed', err);
      }
    });
  }
}
