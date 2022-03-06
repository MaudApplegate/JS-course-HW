import { all } from 'redux-saga/effects';
import { pokemonListSaga } from '../ducks/list/saga';

export function* rootSaga() {
  yield all([pokemonListSaga()]);
}
