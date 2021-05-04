import { ProfileType, Nullable } from '../../types/types';
import { InferActionsTypes } from './index';
import { authActions, TypesAuth } from '../actions';

export type InitialStateAuthType = typeof initialState;
type ActionsType = InferActionsTypes<typeof authActions>;

const initialState = {
  profile: null as Nullable<ProfileType>,
  isTryTime: false,
  isFetching: false,
  formError: ''
};

const authReducer = (state = initialState, action: ActionsType): InitialStateAuthType => {
  switch (action.type) {
    case TypesAuth.SET_USER_DATA:
      return { ...state, ...action.payload };
    case TypesAuth.TRY_TIME_DISABLED:
      return { ...state, isTryTime: action.payload };
    case TypesAuth.IS_FETCHING:
      return { ...state, isFetching: action.payload };
    case TypesAuth.IS_ERROR:
      return { ...state, formError: action.payload };
    case TypesAuth.RESET_ERROR:
      return { ...state, formError: '' };
    default:
      return state;
  }
};

export default authReducer;
