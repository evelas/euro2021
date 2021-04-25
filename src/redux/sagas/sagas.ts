import { all } from 'redux-saga/effects';


import { watchGetLogin, watchGetAuth, watchGetLogout } from './auth';
import { watchSearchAnswers } from './search';
import { watchUserProfile, watchEditProfile } from './userProfile';

export default function* rootSaga() {
  yield all([
    watchGetAuth(),
    watchGetLogin(),
    watchGetLogout(),
    watchSearchAnswers(),
    watchUserProfile(),
    watchEditProfile()
    // watchInitialize(),

  ]);
}
