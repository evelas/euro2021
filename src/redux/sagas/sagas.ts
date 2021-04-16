import { all } from 'redux-saga/effects';


import { watchGetLogin, watchGetAuth, watchGetLogout } from './auth';
import { watchSearchProducts } from './search';
import { watchUserProfile } from './userProfile';

export default function* rootSaga() {
  yield all([
    watchGetAuth(),
    watchGetLogin(),
    watchGetLogout(),
    watchSearchProducts(),
    watchUserProfile()
    // watchInitialize(),

  ]);
}
