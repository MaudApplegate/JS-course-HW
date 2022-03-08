import { all } from 'redux-saga/effects';
import { watcherPokemonList } from '../ducks/list/saga';
import { pokemonDetailsSaga } from '../ducks/details/saga';
import { watcherImage } from '../ducks/listImages/saga';

export function* rootSaga() {
  yield all([watcherPokemonList(), watcherImage(), pokemonDetailsSaga()]);
}
