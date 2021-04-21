import * as Effects from "redux-saga/effects";
import { authActions, TypesAuth } from '../actions/auth';
import { resultCodeEnum } from '../../enum/resultCode';
import { ApiTypes } from './../../api/api';
import { authApi } from '../../api/authApi';
import { LoginFormValuesType, PayloadType, ProfileType } from './../../types/types';

// Login
async function getLogin(login: string, password: string, forgotMe: boolean) {
  const response = await authApi.login(login, password, forgotMe);
  return response.data;
}
// 1 параметр генератора StrictEffect
// Интерфейс с any payload / type
function* workerGetLogin(action: PayloadType<LoginFormValuesType>): Generator<Effects.StrictEffect, void, never> {
  try {
    const data: ApiTypes = yield Effects.call(
      getLogin,
      action.payload.login,
      action.payload.password,
      action.payload.forgotMe,
    );
    console.log('data from login saga', data);
    switch(data.resultCode) {
      case resultCodeEnum.Success:
        yield Effects.put(authActions.loadUserData());
        yield Effects.put(authActions.resetError())
        break;
      case resultCodeEnum.EmailOrPasswordIsWrong:
        yield Effects.put(authActions.addError(data.message))
        break;
      // case resultCodeEnum.AccountIsNotActivated:
      //   yield Effects.put(authActions.addError(data.message))
      //   break;
      case resultCodeEnum.ToMuchAttempt:
        yield Effects.put(authActions.resetError())
        yield Effects.put(authActions.setTryTimeButton(true));
        break;
      case null:
        yield Effects.put(authActions.addError('Сервер перегружен. Пожалуйста, подождите 10 минут.'));
        break;
      default:
        return;
    }

  } catch (e) {
    const message = 'Сервер перегружен. Пожалуйста, подождите 10 минут.';
    yield Effects.put(authActions.addError(message))
  }
}

export function* watchGetLogin() {
  yield Effects.takeEvery(TypesAuth.SET_LOGIN as never, workerGetLogin);
}

// Auth
async function getAuthUserData() {
  const response = await authApi.getAuthData();
  return response.data;
}

function* workerGetAuth(): Generator<Effects.StrictEffect, void, never> {
  try {
    const data: ApiTypes<ProfileType> = yield Effects.call(getAuthUserData);
    console.log('data from auth saga', data)
    yield Effects.put(authActions.toggleIsFetching(true));
    if (data.resultCode === resultCodeEnum.Success) {
      yield Effects.put(authActions.setAuthUserData(data.items, true));
    } else if (data.resultCode === resultCodeEnum.NotAuth) {
      // TODO: переделать редирект с isAuth на history push в saga
    }
  } catch (e) {
    console.error(e);
  }
  yield Effects.delay(1500);
  yield Effects.put(authActions.toggleIsFetching(false));
}

export function* watchGetAuth() {
  yield Effects.takeEvery(TypesAuth.LOAD_USER_DATA, workerGetAuth);
}

// logout
async function getLogout() {
  const response = await authApi.logout();
  return response.data;
}

function* workerGetLogout(): Generator<Effects.StrictEffect, void, never> {
  try {
    const data: ApiTypes = yield Effects.call(getLogout);
    if (data.resultCode === resultCodeEnum.Success) {
      yield Effects.put(authActions.setAuthUserData(null, false));

    }
  } catch (e) {
    console.error(e);
  }
}

export function* watchGetLogout() {
  yield Effects.takeEvery(TypesAuth.SET_LOGOUT, workerGetLogout);
}



