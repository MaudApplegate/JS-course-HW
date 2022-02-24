import { createStore } from 'redux';
import { dataReducer, initialState } from '../ducks/inputDataReducer';

const devtoolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

const store = createStore(dataReducer, initialState, devtoolsExtension());

export default store;
