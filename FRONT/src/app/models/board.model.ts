import { Card, MoveCard } from './card.model';

export interface BoardInitialState {
  columns: Array<string>;
  isAuth: boolean;
  token: string | undefined;
  isOpenModal: boolean;
  cards: Card[];
  moveCard: MoveCard | undefined;
}

export interface BoardState {
  board: BoardInitialState;
}
