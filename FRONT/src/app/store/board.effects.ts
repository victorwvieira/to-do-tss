import { Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { EMPTY } from 'rxjs';
import { map, exhaustMap, catchError, tap } from 'rxjs/operators';
import { BoardState } from '../models/board.model';
import { Card, MoveCard } from '../models/card.model';
import { BoardService } from '../services/board.service';
import {
  closeModal,
  deleteCard,
  deleteCardSuccess,
  getCards,
  getCardsSuccess,
  login,
  moveCard,
  moveCardSuccess,
  postCard,
  postCardSuccess,
  updateCard,
  updateCardSuccess,
  updateToken,
} from './board.actions';
import { selectMoveCard } from './board.selector';

@Injectable()
export class BoardEffects {
  constructor(
    private actions$: Actions,
    private boardService: BoardService,
    private store: Store<BoardState>
  ) {}

  login$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(login),
      exhaustMap(() =>
        this.boardService.getToken().pipe(
          map((token) => updateToken({ token })),
          catchError(() => EMPTY)
        )
      )
    );
  });

  updateToken$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(updateToken),
      exhaustMap(() =>
        this.boardService.getToken().pipe(
          map(() => getCards()),
          catchError(() => EMPTY)
        )
      )
    );
  });

  postCard$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(postCard),
      exhaustMap((action) =>
        this.boardService.postCard(action.cardContent).pipe(
          map((card) => postCardSuccess({ newCard: card })),
          catchError(() => EMPTY)
        )
      )
    );
  });

  moveCard$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(moveCard),
      concatLatestFrom((action) => this.store.select(selectMoveCard)),
      exhaustMap(([action, moveCard]) =>
        this.boardService.updateCard(moveCard?.card as Card).pipe(
          map((card) => moveCardSuccess({ updatedCard: card })),
          catchError(() => EMPTY)
        )
      )
    );
  });

  deleteCard$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(deleteCard),
      exhaustMap((action) =>
        this.boardService.deleteCard(action.cardId).pipe(
          map((cards) => deleteCardSuccess({ cards })),
          catchError(() => EMPTY)
        )
      )
    );
  });

  getCards$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getCards),
      exhaustMap((action) =>
        this.boardService.getCards().pipe(
          map((cards) => getCardsSuccess({ cards })),
          catchError(() => EMPTY)
        )
      )
    );
  });

  updateCard$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(updateCard),
      exhaustMap((action) =>
        this.boardService.updateCard(action.card).pipe(
          map((card) => updateCardSuccess({ updatedCard: card })),
          catchError(() => EMPTY)
        )
      )
    );
  });
}
