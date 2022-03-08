import {
  GET_LIST_REQUESTED,
  GET_LIST_SUCCEED,
  GET_LIST_FAILED,
  GET_LIST_IMAGE_REQUESTED,
  GET_LIST_IMAGE_SUCCEED,
  GET_LIST_IMAGE_FAILED,
} from './actions';

import {
  GET_IMAGE_REQUESTED,
  GET_IMAGE_SUCCEED,
  GET_IMAGE_FAILED,
} from '../listImages/actions';

export const initialPokemonListState = {
  data: [],
  error: null,
  isLoading: false,
};

export const pokemonListReducer = (state = initialPokemonListState, action) => {
  switch (action.type) {
    case GET_LIST_REQUESTED:
      return {
        ...state,
        isLoading: true,
        error: initialPokemonListState.error,
      };
    case GET_LIST_SUCCEED:
      return {
        ...state,
        data: action.payload,
        isLoading: false,
      };
    case GET_LIST_FAILED:
      return { ...state, error: action.error.message, isLoading: false };
    case GET_IMAGE_REQUESTED:
      return {
        ...state,
        isLoading: true,
        error: initialPokemonListState.error,
      };
    case GET_IMAGE_SUCCEED:
      const { payload: item } = action;
      return {
        ...state,
        isLoading: false,
        data: state.data.map((el) => {
          if (el.name === item.name) {
            return { ...el, id: item.id, image: item.image };
          }
          return el;
        }),
      };
    case GET_IMAGE_FAILED:
      return { ...state, error: action.error.message, isLoading: false };
    default:
      return { ...state };
  }
};
