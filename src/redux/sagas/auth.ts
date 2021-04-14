import * as Effects from "redux-saga/effects";
import { stopSubmit } from 'redux-form';
import { authActions, TypesAuth } from '../actions/auth';
import { resultCodeEnum } from '../../enum/resultCode';
import { ApiTypes } from './../../api/api';
import { authApi } from '../../api/authApi';
import { LoginFormValuesType, PayloadType, ProfileType } from './../../types/types';


// Login
async function getLogin(login: string, password: string, forgotMe: boolean) {
  const response = await authApi.login(login, password, forgotMe);
  console.log('response--> ', response)
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
    console.log('data from login saga2', data)
    if (data.resultCode === resultCodeEnum.Success) {
      console.log('data from login saga', data)
      // запускаем auth Saga
      yield Effects.put(authActions.loadUserData());
    } else {
      if (data.resultCode === resultCodeEnum.ToMuchAttempt) {
        // слишком много попыток - блокируем кнопку
        yield Effects.put(authActions.setTryTimeButton(true));
      }
      if (data.resultCode === resultCodeEnum.AccountIsNotActivated) {
        // TODO: Аккаунт не активирован
      }
      const message = data.message;
      yield Effects.put(stopSubmit('login', { _error: message }));
    }
  } catch (e) {
    const message = 'Сервер перегружен. Пожалуйста, подождите 10 минут.';
    yield Effects.put(stopSubmit('login', { _error: message }));
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
    if (data.resultCode === resultCodeEnum.Success) {
      yield Effects.put(authActions.toggleIsFetching(true));
      yield Effects.put(authActions.setAuthUserData(data.items, true));
      yield Effects.delay(1500);
      yield Effects.put(authActions.toggleIsFetching(false));
    }
  } catch (e) {
    console.error(e);
  }
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
