import { all } from 'redux-saga/effects';
import {
  watcherPokemonList,
  testSaga,
  uploadFiles,
  watcherImage,
} from '../ducks/list/saga';
import { pokemonDetailsSaga } from '../ducks/details/saga';
import { pokemonImagesSaga } from '../ducks/listImages/saga';

export function* rootSaga() {
  yield all([
    watcherPokemonList(),
    watcherImage(),
    // testSaga(),
    // pokemonImagesSaga(),
    pokemonDetailsSaga(),
    // uploadFiles(),
  ]);
}
