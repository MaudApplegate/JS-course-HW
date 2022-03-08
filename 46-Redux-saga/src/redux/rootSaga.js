import { all } from 'redux-saga/effects';
import { pokemonListSaga } from '../ducks/list/saga';
import { pokemonDetailsSaga } from '../ducks/details/saga';

export function* rootSaga() {
  yield all([pokemonListSaga(), pokemonDetailsSaga()]);
}