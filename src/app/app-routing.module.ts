import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateNoteComponent } from './components/notes/create-note/create-note.component';
import { ListNotesComponent } from './components/notes/list-notes/list-notes.component';
import { BannerComponent } from './components/banner/banner.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: BannerComponent },
  { path: 'notes', component: ListNotesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
