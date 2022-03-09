export const GET_INPUT_VALUE = 'GET_INPUT_VALUE';
export const FILTER_INPUT_LIST = 'FILTER_INPUT_LIST';

export const ACTION_GET_INPUT_VALUE = (payload) => {
  return {
    type: GET_INPUT_VALUE,
    payload,
  };
};

export const ACTION_FILTER_INPUT_LIST = (payload) => {
  return {
    type: FILTER_INPUT_LIST,
    payload,
  };
};
