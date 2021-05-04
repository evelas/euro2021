import { TypesSearch, searchActions } from './../actions';
import { SearchType, Nullable } from '../../types/types';
import { InferActionsTypes } from './index';


export type InitialStateSearchType = typeof initialState;
type ActionsType = InferActionsTypes<typeof searchActions>;

const initialState = {
  searchAnswer: null as Nullable<Array<SearchType>>,
  notFound: '',
  isFetching: false,
};

const searchReducer = (state = initialState, action: ActionsType): InitialStateSearchType => {
  switch (action.type) {
    case TypesSearch.SET_SEARCH:
      return {
        ...state,
        searchAnswer: action.payload,
      };
    case TypesSearch.IS_FETCHING:
      return {
        ...state,
        isFetching: action.payload,
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
