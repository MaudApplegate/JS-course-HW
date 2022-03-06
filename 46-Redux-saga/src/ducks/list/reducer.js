import {
  GET_LIST_REQUESTED,
  GET_LIST_SUCCEED,
  GET_LIST_FAILED,
} from './actions';

export const initialListState = {
  pokemonList: [],
  error: null,
  isLoading: false,
};

export const listReducer = (state = initialListState, action) => {
  switch (action.type) {
    case GET_LIST_REQUESTED:
      return { ...state, isLoading: true };
    case GET_LIST_SUCCEED:
      console.log(action);
      return {
        ...state,
        pokemonList: action.payload,
        isLoading: false,
      };
    case GET_LIST_FAILED:
      return { ...state, error: action.error.message, isLoading: false };
    default:
      return { ...state };
  }
};
