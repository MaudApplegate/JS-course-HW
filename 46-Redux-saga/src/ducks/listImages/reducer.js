import {
  GET_IMAGE_REQUESTED,
  GET_IMAGE_SUCCEED,
  GET_IMAGE_FAILED,
} from './actions';

export const initialPokemonImagesState = {
  data: [],
  error: null,
  isLoading: false,
};

export const pokemonImagesReducer = (
  state = initialPokemonImagesState,
  action
) => {
  switch (action.type) {
    case GET_IMAGE_REQUESTED:
      return {
        ...state,
        isLoading: true,
        error: initialPokemonImagesState.error,
      };
    case GET_IMAGE_SUCCEED:
      return {
        ...state,
        data: [...state.data, action.payload],
        isLoading: false,
      };
    case GET_IMAGE_FAILED:
      return { ...state, error: action.error.message, isLoading: false };
    default:
      return { ...state };
  }
};
