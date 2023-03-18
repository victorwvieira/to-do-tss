export interface BoardInitialState {
  columns: Array<string>;
  isAuth: boolean;
  token: string | undefined;
  isOpenModal: boolean;
}

export interface BoardState {
  board: BoardInitialState;
}
