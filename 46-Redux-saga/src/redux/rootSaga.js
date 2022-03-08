import { all } from 'redux-saga/effects';
import { pokemonListSaga } from '../ducks/list/saga';
import { pokemonDetailsSaga } from '../ducks/details/saga';
import { pokemonImagesSaga } from '../ducks/listImages/saga';

export function* rootSaga() {
  yield all([pokemonListSaga(), pokemonImagesSaga(), pokemonDetailsSaga()]);
}
