import { createReducer, on } from '@ngrx/store';
import { BoardInitialState } from 'src/app/models/board.model';
// import { increment, decrement, reset } from './counter.actions';

export const initialState: BoardInitialState = {
  columns: ['To do', 'Doing', 'Done'],
};

export const boardReducer = createReducer(
  initialState
  //   on(increment, (state) => state + 1),
  //   on(decrement, (state) => state - 1),
  //   on(reset, (state) => 0)
);
