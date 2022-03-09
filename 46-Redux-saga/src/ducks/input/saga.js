import {
  put,
  takeLatest,
  select,
  takeEvery,
  take,
  call,
} from 'redux-saga/effects';
import { CHANGE_INPUT } from '../../redux/actions';
import { ACTION_GET_LIST_SUCCEED, GET_LIST_SUCCEED } from '../list/actions';
import { ACTION_FILTER_INPUT_LIST, ACTION_GET_INPUT_VALUE } from './actions';

// export function* createCopy() {
//   yield put(ACTION_FILTER_INPUT_LIST)
// }

export function* inputChanged(action) {
  console.log(action.payload);
  yield put(ACTION_GET_INPUT_VALUE(action.payload));
  const allListData = yield select((state) => state.list.data);
  console.log(allListData);

  // const valData = allListData.filter((item) =>
  //   item.name.startsWith(action.payload)
  // );
  // console.log(valData);
  // yield put(ACTION_FILTER_INPUT_LIST(valData));

  // const valData = allListData.map((item) => {
  //   if (item.name.startsWith(action.payload)) {
  //     console.log(item.isDisabled);
  //     return (item.isDisabled = true);
  //   }
  // });

  // const valData = allListData.filter((item) =>
  //   item.name.startsWith(action.payload)
  // );

  yield put(ACTION_FILTER_INPUT_LIST(action.payload));

  // console.log(valData);
}

export function* watcherInput() {
  yield takeEvery(CHANGE_INPUT, inputChanged);
}
