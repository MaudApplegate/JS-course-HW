import { pokemonDetailsReducer } from '../ducks/details/reducer';
import { pokemonListReducer } from '../ducks/list/reducer';
import { pokemonImagesReducer } from '../ducks/listImages/reducer';

const rootReducer = {
  list: pokemonListReducer,
  images: pokemonImagesReducer,
  details: pokemonDetailsReducer,
};

export default rootReducer;
