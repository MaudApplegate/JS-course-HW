import {
  GET_IMAGE_REQUESTED,
  GET_IMAGE_SUCCEED,
  GET_IMAGE_FAILED,
} from './actions';

export const initialPokemonImageState = {
  data: [],
  error: null,
  isLoading: false,
};

export const pokemonImageReducer = (
  state = initialPokemonImageState,
  action
) => {
  switch (action.type) {
    case GET_IMAGE_REQUESTED:
      return {
        ...state,
        isLoading: true,
        error: initialPokemonImageState.error,
      };
    case GET_IMAGE_SUCCEED:
      console.log(action);
      return {
        ...state,
        data: action.payload,
        isLoading: false,
      };
    case GET_IMAGE_FAILED:
      return { ...state, error: action.error.message, isLoading: false };
    default:
      return { ...state };
  }
};
