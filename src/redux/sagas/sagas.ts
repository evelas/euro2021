import { all } from 'redux-saga/effects';


import { watchGetLogin, watchGetAuth, watchGetLogout } from './auth';
import { watchSearchProducts } from './search';

export default function* rootSaga() {
  yield all([
    watchGetAuth(),
    watchGetLogin(),
    watchGetLogout(),
    watchSearchProducts(),
    // watchInitialize(),

  ]);
}
