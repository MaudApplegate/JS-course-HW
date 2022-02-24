const SET_DATA = 'SET_DATA';
const DELETE_DATA = 'DELETE_DATA';

export const ACTION_SET_DATA = (payload) => ({
  type: 'SET_DATA',
  payload,
});

export const ACTION_DELETE_DATA = (payload) => ({
  type: 'DELETE_DATA',
  payload,
});

export const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATA:
      return { data: [...state.data, action.payload] };
    case DELETE_DATA:
      return { data: state.data.filter((el) => el.id !== action.payload.id) };
    default:
      return { ...state };
  }
};

export const initialState = { data: [] };
