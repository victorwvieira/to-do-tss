import { createAction, props } from '@ngrx/store';

export const login = createAction('[Auth] Login');
export const updateToken = createAction(
  '[Auth] Update Token',
  props<{ token: string }>()
);
export const openModal = createAction('[Modal] Open modal');
export const closeModal = createAction('[Modal] Close modal');
