import { InferActionsTypes } from '.';
import { Nullable, UserProfileType } from '../../types/types';
import { userProfileActions, TypesUserProfile } from '../actions';

type InitialStateType = typeof initialState;
type ActionsType = InferActionsTypes<typeof userProfileActions>;

const initialState = {
  userData: null as Nullable<UserProfileType>,
  isLoaded: false,
  notFound: ''
};

const oneUserReducer = (state = initialState, action: ActionsType): InitialStateType => {
  switch (action.type) {
    case TypesUserProfile.SET_USER:
      return {
        ...state,
        userData: action.payload,
      };
    case TypesUserProfile.IS_LOADED:
      return {
        ...state,
        isLoaded: action.payload,
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
