import { getImage, getList } from '../../services/api/api';
import { put, takeEvery, call, take, select, all } from 'redux-saga/effects';
import {
  ACTION_GET_LIST_FAILED,
  ACTION_GET_LIST_REQUESTED,
  ACTION_GET_LIST_SUCCEED,
  GET_LIST_SUCCEED,
} from './actions';
import {
  ACTION_GET_IMAGE_REQUESTED,
  ACTION_GET_IMAGE_SUCCEED,
  ACTION_GET_IMAGE_FAILED,
} from '../listImages/actions';
import { GET_POKEMON_LIST, ACTION_TEST, TEST } from '../../redux/actions';
import { getPokemonImagesSaga } from '../listImages/saga';

export function* getPokemonListSaga() {
  try {
    yield put(ACTION_GET_LIST_REQUESTED());
    const data = yield call(() => {
      return getList();
    });
    yield put(ACTION_GET_LIST_SUCCEED(data));
  } catch (error) {
    yield put(ACTION_GET_LIST_FAILED(error));
  }
}

export function* watcherPokemonList() {
  yield takeEvery(GET_POKEMON_LIST, getPokemonListSaga);
}

export function* watcherImage() {
  while (true) {
    yield take(GET_LIST_SUCCEED);
    yield call(imageRequest);
  }
}

export function* imageRequest() {
  try {
    const urlData = yield select((state) => state.list.data);
    console.log(urlData);
    // yield call(uploadSingleImage);
    // yield urlData.map((item) => console.log(item));
    // yield urlData.map((item) => {
    //   return call(uploadSingleImage(item.url));
    // });
    const response = yield all(
      urlData.map((item) => {
        return call(uploadSingleImage, item.url);
      })
    );
    console.log(response);
  } catch (error) {
    yield put(ACTION_GET_IMAGE_FAILED(error));
  }
}

export function* uploadSingleImage(file) {
  try {
    yield put(ACTION_GET_IMAGE_REQUESTED());
    console.log(file);
    const response = yield call(() => {
      return getImage(file);
    });
    console.log(response);
    yield put(ACTION_GET_IMAGE_SUCCEED(response));
  } catch (error) {
    yield put(ACTION_GET_IMAGE_FAILED(error));
  }
}

// export function* getPokemonListSaga() {
//   try {
//     yield put(ACTION_GET_LIST_REQUESTED());
//     const data = yield call(() => {
//       return getList();
//     });
//     yield put(ACTION_GET_LIST_SUCCEED(data));
//     // while (true) {
//     //   const { image } = yield take(data);
//     //   console.log(image);
//     //   // yield call(GET_POKEMON_IMAGES, getPokemonImagesSaga)
//     // }
//   } catch (error) {
//     yield put(ACTION_GET_LIST_FAILED(error));
//   }
// }

// export function* pokemonListSaga() {
//   yield takeEvery(GET_POKEMON_LIST, getPokemonListSaga);
// }

// export function* test(action) {
//   yield take('GET_LIST_SUCCEED');
//   const data = yield select((state) => state.list.data);

//   console.log(data);
//   yield call(uploadFiles(data));
//   // data.map((i) => console.log(i.url));
//   // // data.map((item) => )
//   // yield data.map((item) => {
//   //   return call(() => getPokemonImagesSaga(item.url));
//   // });
// }

// // export const TEST = 'TEST';

// // export const ACTION_TEST = (payload) => {
// //   return {
// //     type: TEST,
// //     payload,
// //   };
// // };

// export function* uploadFiles(files) {
//   console.log(files);
//   yield files.map((file) => call(uploadSingleFile, file));
// }

// export function* uploadSingleFile(file) {
//   console.log(file);
//   try {
//     yield put(ACTION_GET_IMAGE_REQUESTED());
//     const data = yield call(() => {
//       return getImage(file);
//     });
//     yield put(ACTION_GET_IMAGE_SUCCEED(data));
//   } catch (error) {
//     yield put(ACTION_GET_IMAGE_FAILED(error));
//   }
// }

// // export function* imageTest() {

// // }
// //     data.forEach((item) => {
// //       const imageTest = yield call((data) => {
// // return getImage(item.url);
// //     })

// // const imageTest = yield call((data) => {
// //   return getImage(data.url);
// // });
// //     yield put(ACTION_GET_IMAGE_SUCCEED(imageTest));
// //   } catch (error) {
// //     yield put(ACTION_GET_IMAGE_FAILED(error));
// //   }
// // }

// export function* testSaga() {
//   yield takeEvery(TEST, test);
// }
