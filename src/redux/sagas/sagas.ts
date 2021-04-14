import { all } from 'redux-saga/effects';


import { watchGetLogin, watchGetAuth, watchGetLogout } from './auth';


export default function* rootSaga() {
  yield all([
    watchGetAuth(),
    watchGetLogin(),
    watchGetLogout(),
    // watchInitialize(),

  ]);
}
