import { createSelector } from '@ngrx/store';
import { BoardState } from 'src/app/models/board.model';

export const selector = (state: BoardState) => state;

export const selectColumns = createSelector(
  selector,
  (state: BoardState) => state.board.columns
);
