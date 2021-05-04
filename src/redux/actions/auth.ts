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
  IS_ERROR: '/reducers/auth/IS_ERROR' as const,
  RESET_ERROR: '/reducers/auth/RESET_ERROR' as const,
};

export const authActions = {
  setAuthUserData: (profile: ProfileType | null) => ({
    type: TypesAuth.SET_USER_DATA,
    payload: {
      profile
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
  addError: (formError: string) => ({
    type: TypesAuth.IS_ERROR,
    payload: formError
  }),
  resetError: () => ({
    type: TypesAuth.RESET_ERROR
  })
};

