import { delay, put, takeLeading, all } from 'redux-saga/effects';

import { ExtraArguments } from '../types';
import { hideModal } from '../store/modal';
import { addItem, addItemDone } from '../store/items';

export function* handler({ api }: ExtraArguments, { payload }: any) {
  try {

    yield delay(3000);

    yield all([put(addItemDone()), put(hideModal())]);
  } catch (error) {
    console.error(error);
  }
}

export function* fakeSaga(extra: ExtraArguments) {
  yield takeLeading(addItem, handler, extra);
}
