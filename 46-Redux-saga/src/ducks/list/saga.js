import { getList } from '../../services/api/api';
import { put, takeLatest, takeEvery, call } from 'redux-saga/effects';
import {
  ACTION_GET_LIST_FAILED,
  ACTION_GET_LIST_REQUESTED,
  ACTION_GET_LIST_SUCCEED,
  GET_LIST_REQUESTED,
} from './actions';
import { FETCHED_DATA } from '../../redux/actions';

export function* getPokemonListSaga() {
  try {
    yield put(ACTION_GET_LIST_REQUESTED());
    // const data = yield getList();
    const data = yield call(() => {
      return getList();
    });
    console.log(data);
    yield put(ACTION_GET_LIST_SUCCEED(data));
  } catch (error) {
    yield put(ACTION_GET_LIST_FAILED(error));
  }
}

export function* pokemonListSaga() {
  yield takeEvery('FETCHED_DATA', getPokemonListSaga);
}
