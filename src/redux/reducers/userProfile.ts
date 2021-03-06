import { InferActionsTypes } from '.';
import { Nullable, UserProfileType } from '../../types/types';
import { userProfileActions, TypesUserProfile } from '../actions';

export type InitialStateUserProfileType = typeof initialState;
type ActionsType = InferActionsTypes<typeof userProfileActions>;

const initialState = {
  userData: null as Nullable<UserProfileType>,
  isFetching: true,
  notFound: '',
  isSaved: false
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
        isFetching: false,
      };
    case TypesUserProfile.NOT_FOUND_USER:
      return {
        ...state,
        notFound: action.payload,
      };
    case TypesUserProfile.IS_SAVED:
      return {
        ...state,
        isSaved: action.payload
      }
    default:
      return state;
  }
};

export default oneUserReducer;
