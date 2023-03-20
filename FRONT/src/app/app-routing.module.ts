import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoardComponent } from './containers/board/board.component';

const routes: Routes = [
  {
    path: '',
    title: 'To-Do-Tss',
    component: BoardComponent,
  },
  { path: '**', redirectTo: '' }, // PageNotFound 404
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
