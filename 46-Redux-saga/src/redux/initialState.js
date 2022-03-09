import { initialPokemonListState } from '../ducks/list/reducer';
import { initialPokemonDetailsState } from '../ducks/details/reducer';
import { initialInputState } from '../ducks/input/reducer';

const initialState = {
  input: initialInputState,
  list: initialPokemonListState,
  details: initialPokemonDetailsState,
};

export default initialState;
