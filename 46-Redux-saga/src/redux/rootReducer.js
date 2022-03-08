import { combineReducers } from 'redux';
import { pokemonDetailsReducer } from '../ducks/details/reducer';
import { pokemonListReducer, pokemonImageReducer } from '../ducks/list/reducer';
// import { pokemonImagesReducer } from '../ducks/listImages/reducer';

const rootReducer = {
  // list: combineReducers(pokemonListReducer, pokemonImageReducer),
  list: pokemonListReducer,
  // list: pokemonImageReducer,
  // images: pokemonImagesReducer,
  details: pokemonDetailsReducer,
};

export default rootReducer;
