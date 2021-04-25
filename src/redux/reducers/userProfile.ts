import { InferActionsTypes } from '.';
import { Nullable, UserProfileType } from '../../types/types';
import { userProfileActions, TypesUserProfile } from '../actions';

export type InitialStateUserProfileType = typeof initialState;
type ActionsType = InferActionsTypes<typeof userProfileActions>;

const initialState = {
  userData: null as Nullable<UserProfileType>,
  isFetching: false,
  notFound: ''
};

const oneUserReducer = (state = initialState, action: ActionsType): InitialStateUserProfileType => {
  switch (action.type) {
    case TypesUserProfile.SET_USER:
      return {
        ...state,
        userData: action.payload,
      };
    case TypesUserProfile.IS_FETCHING:
      return {
        ...state,
        isFetching: action.payload,
      };
    case TypesUserProfile.NOT_FOUND_USER:
      return {
        ...state,
        notFound: action.payload,
      };
    default:
      return state;
  }
};

export default oneUserReducer;
