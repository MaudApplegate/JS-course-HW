import { createContext, useReducer } from 'react';

const InitialState = {};

export const ReducerContext = createContext(InitialState);

export const CREATE_TASK = 'CREATE_TASK';

export const ACTION_CREATE_TASK = (payload) => {
  return {
    type: CREATE_TASK,
    payload,
  };
};

const reducer = (state, action) => {
  switch (action.type) {
    case CREATE_TASK:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export const ReducerContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, InitialState);

  return (
    <ReducerContext.Provider value={{ state, dispatch }}>
      {children}
    </ReducerContext.Provider>
  );
};
