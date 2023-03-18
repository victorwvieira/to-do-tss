import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, exhaustMap, catchError } from 'rxjs/operators';
import { BoardService } from '../services/board.service';
import { login, updateToken } from './board.actions';

@Injectable()
export class BoardEffects {
  constructor(private actions$: Actions, private boardService: BoardService) {}

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
}
