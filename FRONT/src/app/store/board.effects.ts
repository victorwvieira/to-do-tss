import { Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { EMPTY } from 'rxjs';
import { map, exhaustMap, catchError } from 'rxjs/operators';
import { BoardState } from '../models/board.model';
import { MoveCard } from '../models/card.model';
import { BoardService } from '../services/board.service';
import {
  login,
  moveCard,
  moveCardSuccess,
  postCard,
  postCardSuccess,
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
        this.boardService.updateCard(moveCard as MoveCard).pipe(
          map((card) => moveCardSuccess({ updatedCard: card })),
          catchError(() => EMPTY)
        )
      )
    );
  });
}
