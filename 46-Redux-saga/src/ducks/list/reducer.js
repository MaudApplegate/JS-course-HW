import {
  GET_LIST_REQUESTED,
  GET_LIST_SUCCEED,
  GET_LIST_FAILED,
} from './actions';

export const initialPokemonListState = {
  pokemons: [],
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
      console.log(action);
      return {
        ...state,
        pokemons: action.payload,
        isLoading: false,
      };
    case GET_LIST_FAILED:
      return { ...state, error: action.error.message, isLoading: false };
    default:
      return { ...state };
  }
};
