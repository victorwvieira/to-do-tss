import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { BoardState } from 'src/app/models/board.model';
import { Card } from 'src/app/models/card.model';
import { closeModal, login, openModal } from 'src/app/store/board.actions';
import { selectColumns, selectModalState } from 'src/app/store/board.selector';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {
  columns$!: Observable<Array<string>>;
  isModalOpen$!: Observable<boolean>;

  constructor(private store: Store<BoardState>) {}

  ngOnInit(): void {
    this.store.dispatch(login());
    this.columns$ = this.store.select(selectColumns);
    this.isModalOpen$ = this.store.select(selectModalState);
  }

  onCloseModal(card: Card | null): void {
    this.store.dispatch(closeModal());
  }

  onClickAdd(): void {
    this.store.dispatch(openModal());
  }
}
