import { TypesSearch, searchActions } from './../actions';
import { SearchFullNameType, Nullable } from '../../types/types';
import { InferActionsTypes } from './index';


type InitialStateType = typeof initialState;
type ActionsType = InferActionsTypes<typeof searchActions>;

const initialState = {
  searchAnswer: null as Nullable<Array<SearchFullNameType>>,
  notFound: ''
};

const searchReducer = (state = initialState, action: ActionsType): InitialStateType => {
  switch (action.type) {
    case TypesSearch.SET_SEARCH:
      return {
        ...state,
        searchAnswer: action.payload,
      };
    case TypesSearch.NOT_FOUND_ANY:
      return {
        ...state,
        notFound: action.payload,
      };
    default:
      return state;
  }
};

export default searchReducer;
