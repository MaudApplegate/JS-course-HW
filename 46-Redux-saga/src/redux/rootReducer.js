import { pokemonDetailsReducer } from '../ducks/details/reducer';
import { inputReducer } from '../ducks/input/reducer';
import { pokemonListReducer } from '../ducks/list/reducer';

const rootReducer = {
  input: inputReducer,
  list: pokemonListReducer,
  details: pokemonDetailsReducer,
};

export default rootReducer;
