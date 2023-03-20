import { createReducer, on } from '@ngrx/store';
import { BoardInitialState } from 'src/app/models/board.model';
import {
  closeModal,
  deleteCardSuccess,
  getCardsSuccess,
  login,
  moveCard,
  moveCardSuccess,
  openModal,
  postCard,
  postCardSuccess,
  updateCardSuccess,
  updateToken,
} from './board.actions';

export const initialState: BoardInitialState = {
  columns: ['To do', 'Doing', 'Done'],
  isAuth: false,
  token: undefined,
  isOpenModal: false,
  cards: [],
  moveCard: undefined,
};

export const boardReducer = createReducer(
  initialState,
  on(login, (state): BoardInitialState => ({ ...state, isAuth: true })),
  on(
    updateToken,
    (state, { token }): BoardInitialState => ({ ...state, token })
  ),
  on(
    openModal,
    (state): BoardInitialState => ({ ...state, isOpenModal: true })
  ),
  on(
    closeModal,
    (state): BoardInitialState => ({ ...state, isOpenModal: false })
  ),
  on(
    postCardSuccess,
    (state, { newCard }): BoardInitialState => ({
      ...state,
      isOpenModal: false,
      cards: [...state.cards, newCard],
    })
  ),
  on(moveCard, (state, { moveCard }): BoardInitialState => {
    switch (moveCard.card.lista) {
      case 'To do':
        return {
          ...state,
          moveCard: {
            ...moveCard,
            card: {
              ...moveCard.card,
              lista: 'Doing',
            },
          },
        };
      case 'Doing':
        if (moveCard.direction === 'left') {
          return {
            ...state,
            moveCard: {
              ...moveCard,
              card: {
                ...moveCard.card,
                lista: 'To do',
              },
            },
          };
        } else {
          return {
            ...state,
            moveCard: {
              ...moveCard,
              card: {
                ...moveCard.card,
                lista: 'Done',
              },
            },
          };
        }
      case 'Done':
        return {
          ...state,
          moveCard: {
            ...moveCard,
            card: {
              ...moveCard.card,
              lista: 'Doing',
            },
          },
        };
      default:
        return { ...state };
    }
  }),
  on(moveCardSuccess, (state, { updatedCard }): BoardInitialState => {
    const cards = state.cards.filter((card) => card.id !== updatedCard.id);
    cards.push(updatedCard);

    return { ...state, cards };
  }),
  on(
    deleteCardSuccess,
    (state, { cards }): BoardInitialState => ({
      ...state,
      cards: cards,
    })
  ),
  on(
    getCardsSuccess,
    (state, { cards }): BoardInitialState => ({
      ...state,
      cards: cards,
    })
  ),
  on(updateCardSuccess, (state, { updatedCard }): BoardInitialState => {
    const cards = state.cards.filter((card) => card.id !== updatedCard.id);
    cards.push(updatedCard);

    return { ...state, cards, isOpenModal: false };
  })
);
