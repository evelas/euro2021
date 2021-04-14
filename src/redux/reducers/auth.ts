import { ProfileType, Nullable } from '../../types/types';
import { InferActionsTypes } from './index';
import { authActions, TypesAuth } from '../actions/auth';

type InitialStateType = typeof initialState;
type ActionsType = InferActionsTypes<typeof authActions>;
// // ActionsType без infer
// type ActionsTypeWithOutInfer =  ReturnType<typeof authActions.setAuthUserData> |
//                                 ReturnType<typeof authActions.setTryTimeButton> |
//                                 ReturnType<typeof authActions.toggleIsFetching>;

const initialState = {
  profile: null as Nullable<ProfileType>,
  isAuth: false,
  isTryTime: false,
  isFetching: false,
};

const authReducer = (state = initialState, action: ActionsType): InitialStateType => {
  switch (action.type) {
    case TypesAuth.SET_USER_DATA:
      return { ...state, ...action.payload };
    case TypesAuth.TRY_TIME_DISABLED:
      return { ...state, isTryTime: action.payload };
    case TypesAuth.IS_FETCHING:
      return { ...state, isFetching: action.payload };
    default:
      return state;
  }
};

export default authReducer;
