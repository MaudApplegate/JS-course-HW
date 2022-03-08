export const GET_POKEMON_LIST = 'GET_POKEMON_LIST';
export const GET_POKEMON_DETAILS = 'GET_POKEMON_DETAILS';

export const ACTION_GET_POKEMON_LIST = () => {
  return {
    type: GET_POKEMON_LIST,
  };
};

export const ACTION_GET_POKEMON_DETAILS = (payload) => {
  return {
    type: GET_POKEMON_DETAILS,
    payload,
  };
};
