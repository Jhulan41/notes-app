import { Routes } from '@angular/router';
import { HomeComponent } from './home/home';
import { NotesListComponent } from './pages/notes-list/notes-list';
import { CreateNoteComponent } from './pages/create-note/create-note';
import { UpdateNoteComponent } from './pages/update-note/update-note';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'notes', component: NotesListComponent },
  { path: 'create', component: CreateNoteComponent },
  { path: 'edit/:id', component: UpdateNoteComponent },
  { path: '**', redirectTo: '' }
];
