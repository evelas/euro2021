import { TypesSearch, searchActions } from './../actions';
import { SearchFullNameType, Nullable } from '../../types/types';
import { InferActionsTypes } from './index';


export type InitialStateSearchType = typeof initialState;
type ActionsType = InferActionsTypes<typeof searchActions>;

const initialState = {
  searchAnswer: null as Nullable<Array<SearchFullNameType>>,
  searchText: '' as string | string[],
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
    case TypesSearch.TEXT_SEARCH_SAVE:
      return {
        ...state,
        searchText: action.payload,
      };
    default:
      return state;
  }
};

export default searchReducer;
