import { createAction, props } from '@ngrx/store';

export const login = createAction('[Auth] Login');
export const updateToken = createAction(
  '[Auth] Update Token',
  props<{ token: string }>()
);
