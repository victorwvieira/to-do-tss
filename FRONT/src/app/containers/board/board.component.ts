import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { BoardState } from 'src/app/models/board.model';
import { Card, CardContent, MoveCard } from 'src/app/models/card.model';
import {
  closeModal,
  deleteCard,
  login,
  moveCard,
  openModal,
  postCard,
} from 'src/app/store/board.actions';
import {
  selectCards,
  selectColumns,
  selectModalState,
} from 'src/app/store/board.selector';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {
  columns$!: Observable<Array<string>>;
  isModalOpen$!: Observable<boolean>;
  cards$!: Observable<Card[]>;

  constructor(private store: Store<BoardState>) {}

  ngOnInit(): void {
    this.store.dispatch(login());
    this.columns$ = this.store.select(selectColumns);
    this.isModalOpen$ = this.store.select(selectModalState);
    this.cards$ = this.store.select(selectCards);
  }

  onCloseModal(cardContent: CardContent | null): void {
    if (cardContent) {
      this.store.dispatch(postCard({ cardContent }));
    } else {
      this.store.dispatch(closeModal());
    }
  }

  onClickAdd(): void {
    this.store.dispatch(openModal());
  }

  onMoveCard(card: MoveCard) {
    this.store.dispatch(moveCard({ moveCard: card }));
  }

  onDeleteCard(card: Card) {
    this.store.dispatch(deleteCard({ cardId: card.id }));
  }
}
