const SET_DATA = 'SET_DATA';
const DELETE_DATA = 'DELETE_DATA';
const EDIT_DATA = 'EDIT_DATA';

export const ACTION_SET_DATA = (payload) => ({
  type: 'SET_DATA',
  payload
});

export const ACTION_DELETE_DATA = (payload) => ({
  type: 'DELETE_DATA',
  payload,
});

export const ACTION_EDIT_DATA = (payload) => ({
  type: 'EDIT_DATA',
  payload,
});

export const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATA:
      return [ ...state, {id: action.id, text = action.text} ];
    case DELETE_DATA:
      return { ...state };
    case EDIT_DATA:
      return { ...state };
    default:
      return { ...state };
  }
};

export const initialState = [];
