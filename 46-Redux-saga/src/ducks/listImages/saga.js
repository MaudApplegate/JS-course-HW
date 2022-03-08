import { getImage } from '../../services/api/api';
import { put, takeEvery, call } from 'redux-saga/effects';
import {
  ACTION_GET_IMAGE_REQUESTED,
  ACTION_GET_IMAGE_SUCCEED,
  ACTION_GET_IMAGE_FAILED,
} from './actions';
import { GET_POKEMON_IMAGES } from '../../redux/actions';

export function* getPokemonImagesSaga(action) {
  try {
    yield put(ACTION_GET_IMAGE_REQUESTED());
    const data = yield call(() => {
      return getImage(action.payload);
    });
    yield put(ACTION_GET_IMAGE_SUCCEED(data));
  } catch (error) {
    yield put(ACTION_GET_IMAGE_FAILED(error));
  }
}

export function* pokemonImagesSaga() {
  yield takeEvery(GET_POKEMON_IMAGES, getPokemonImagesSaga);
}
