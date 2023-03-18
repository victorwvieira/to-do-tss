import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { BoardState } from 'src/app/models/board.model';
import { selectColumns } from 'src/app/store/board.selector';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {
  columns$!: Observable<Array<string>>;

  constructor(private store: Store<BoardState>) {}

  ngOnInit(): void {
    this.columns$ = this.store.select(selectColumns);
  }
}
