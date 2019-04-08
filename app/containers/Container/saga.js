import { takeLatest, put } from 'redux-saga/effects';
import { LOG_BOX_DATA } from './constants';
import { saveBoxData } from './actions';
export function* logData(data) {
  const { id, left, top } = data.payload;
  yield console.log(`SAGA id:${id} left:${left} top:${top}`);
  yield put(saveBoxData(data.payload));
}

export default function* containerSaga() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(LOG_BOX_DATA, logData);
}
