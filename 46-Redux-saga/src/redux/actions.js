export const GET_POKEMON_LIST = 'GET_POKEMON_LIST';
export const GET_POKEMON_DETAILS = 'GET_POKEMON_DETAILS';
export const GET_POKEMON_IMAGES = 'GET_POKEMON_IMAGES';

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

export const ACTION_GET_POKEMON_IMAGES = (payload) => {
  return {
    type: GET_POKEMON_IMAGES,
    payload,
  };
};
