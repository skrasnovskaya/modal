import { all, call, spawn } from 'redux-saga/effects';

import { ExtraArguments } from '../types';

import { fakeSaga } from './fake-add';

const sagas = [fakeSaga];

export function* rootSaga(extra: ExtraArguments) {
  yield all(
    sagas.map((saga) =>
      spawn(function*() {
        while (true) {
          try {
            yield call(saga, extra);
          } catch (e) {
            // TODO: handle unhandled error
            console.error(e);
          }
        }
      }),
    ),
  );
}
