import { createAction, props } from '@ngrx/store';
import { Card, CardContent, MoveCard } from '../models/card.model';

export const login = createAction('[Auth] Login');
export const updateToken = createAction(
  '[Auth] Update Token',
  props<{ token: string }>()
);
export const openModal = createAction('[Modal] Open modal');
export const closeModal = createAction('[Modal] Close modal');
export const postCard = createAction(
  '[Card] Add new card',
  props<{ cardContent: CardContent }>()
);
export const postCardSuccess = createAction(
  '[Card] Add new card success',
  props<{ newCard: Card }>()
);
export const moveCard = createAction(
  '[Card] Move card',
  props<{ moveCard: MoveCard }>()
);
export const moveCardSuccess = createAction(
  '[Card] Move card success',
  props<{ updatedCard: Card }>()
);
export const deleteCard = createAction(
  '[Card] Delete card',
  props<{ cardId: string }>()
);
export const deleteCardSuccess = createAction(
  '[Card] Delete card success',
  props<{ cards: Card[] }>()
);
export const getCards = createAction('[Card] Get cards');
export const getCardsSuccess = createAction(
  '[Card] Get cards success',
  props<{ cards: Card[] }>()
);
export const updateCard = createAction(
  '[Card] Update card',
  props<{ card: Card }>()
);
export const updateCardSuccess = createAction(
  '[Card] Update card success',
  props<{ updatedCard: Card }>()
);
