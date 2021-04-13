import { ProfileType } from '../../types/types';

export const TypesAuth = {
  // воспринимай эти строки как константы
  // это дает возможность в type использовать только это значение
  // если убрать const, то можно будет в Type вписывать другое значение
  // например '/reducers/auth/SET_USER_DATA' стала типом.
  SET_USER_DATA: '/reducers/auth/SET_USER_DATA' as const,
  LOAD_USER_DATA: '/reducers/auth/LOAD_USER_DATA' as const,
  SET_LOGIN: '/reducers/auth/SET_LOGIN' as const,
  SET_LOGOUT: '/reducers/auth/SET_LOGOUT' as const,
  TRY_TIME_DISABLED: '/reducers/auth/TRY_TIME_DISABLED' as const,
  IS_FETCHING: '/reducers/auth/IS_FETCHING' as const,
};

export const authActions = {
  setAuthUserData: (profile: ProfileType | null, isAuth: boolean) => ({
    type: TypesAuth.SET_USER_DATA,
    payload: {
      profile,
      isAuth,
    },
  }),
  loadUserData: () => ({
    type: TypesAuth.LOAD_USER_DATA,
  }),
  setLogin: (login: string, password: string, forgotMe: boolean) => ({
    type: TypesAuth.SET_LOGIN,
    payload: {
      login,
      password,
      forgotMe,
    },
  }),
  setLogout: () => ({
    type: TypesAuth.SET_LOGOUT,
  }),
  setTryTimeButton: (disabled: boolean) => ({
    type: TypesAuth.TRY_TIME_DISABLED,
    payload: disabled,
  }),
  toggleIsFetching: (isFetching: boolean) => ({
    type: TypesAuth.IS_FETCHING,
    payload: isFetching,
  }),
};

