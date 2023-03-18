import { createReducer, on } from '@ngrx/store';
import { BoardInitialState } from 'src/app/models/board.model';
import { login, updateToken } from './board.actions';

export const initialState: BoardInitialState = {
  columns: ['To do', 'Doing', 'Done'],
  isAuth: false,
  token: undefined,
};

export const boardReducer = createReducer(
  initialState,
  on(login, (state): BoardInitialState => ({ ...state, isAuth: true })),
  on(
    updateToken,
    (state, { token }): BoardInitialState => ({ ...state, token })
  )
);
