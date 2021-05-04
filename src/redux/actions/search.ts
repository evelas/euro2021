import { SearchType } from "../../types/types";

export const TypesSearch = {
  SET_SEARCH: '/reducers/search/SET_SEARCH' as const,
  LOAD_SEARCH: '/reducers/search/LOAD_SEARCH' as const,
  NOT_FOUND_ANY: '/reducers/search/NOT_FOUND_ANY' as const,
  IS_FETCHING: '/reducers/search/IS_FETCHING' as const,
  TEXT_SEARCH_SAVE: '/reducers/search/TEXT_SEARCH_SAVE' as const,
};

export const searchActions = {
  setSearchAnswer: (searchUser: Array<SearchType>) => ({
    type: TypesSearch.SET_SEARCH,
    payload: searchUser,
  }),
  setSearchText: (text: string | string[]) => ({
    type: TypesSearch.TEXT_SEARCH_SAVE,
    payload: text,
  }),
  loadSearch: (text: string | string[]) => ({
    type: TypesSearch.LOAD_SEARCH,
    payload: text,
  }),
  notFoundAny: (text: string) => ({
    type: TypesSearch.NOT_FOUND_ANY,
    payload: text
  }),
  toggleIsFetching: (isFetching: boolean) => ({
    type: TypesSearch.IS_FETCHING,
    payload: isFetching,
  }),
};

