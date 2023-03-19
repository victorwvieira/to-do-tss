import { createSelector } from '@ngrx/store';
import { BoardState } from 'src/app/models/board.model';

export const selector = (state: BoardState) => state;

export const selectColumns = createSelector(
  selector,
  (state: BoardState) => state.board.columns
);
export const selectToken = createSelector(
  selector,
  (state: BoardState) => state.board.token
);

export const selectModalState = createSelector(
  selector,
  (state: BoardState) => state.board.isOpenModal
);

export const selectCards = createSelector(
  selector,
  (state: BoardState) => state.board.cards
);

export const selectMoveCard = createSelector(
  selector,
  (state: BoardState) => state.board.moveCard
);
