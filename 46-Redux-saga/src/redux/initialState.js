import { initialPokemonListState } from '../ducks/list/reducer';
import { initialPokemonDetailsState } from '../ducks/details/reducer';
import { initialPokemonImagesState } from '../ducks/listImages/reducer';

const initialState = {
  list: initialPokemonListState,
  // images: initialPokemonImagesState,
  details: initialPokemonDetailsState,
};

export default initialState;
