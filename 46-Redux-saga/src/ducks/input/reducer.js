import { GET_INPUT_VALUE, FILTER_INPUT_LIST } from './actions';

export const initialInputState = {
  value: {},
  fitList: [],
};

export const inputReducer = (state = initialInputState, action) => {
  switch (action.type) {
    case GET_INPUT_VALUE:
      console.log(action.payload);
      return { ...state, value: action.payload };
    // case FILTER_INPUT_LIST:
    //   console.log(action.payload);
    //   return { ...state, fitList: action.payload };
    default:
      return { ...state };
  }
};
