export const GET_POKEMON_LIST = 'GET_POKEMON_LIST';
export const GET_POKEMON_DETAILS = 'GET_POKEMON_DETAILS';
export const GET_POKEMON_IMAGES = 'GET_POKEMON_IMAGES';
export const INPUT_CHANGED = 'INPUT_CHANGED';

export const ACTION_GET_POKEMON_LIST = () => {
  return {
    type: GET_POKEMON_LIST,
  };
};

export const ACTION_GET_POKEMON_IMAGES = (payload) => {
  return {
    type: GET_POKEMON_IMAGES,
    payload,
  };
};

export const ACTION_GET_POKEMON_DETAILS = (payload) => {
  return {
    type: GET_POKEMON_DETAILS,
    payload,
  };
};

// export const ACTION_GET_POKEMON_IMAGES = (payload) => {
//   return {
//     type: GET_POKEMON_IMAGES,
//     payload,
//   };
// };

// export const ACTION_INPUT_CHANGED = (payload) => {
//   return {
//     type: INPUT_CHANGED,
//     payload,
//   };
// };
