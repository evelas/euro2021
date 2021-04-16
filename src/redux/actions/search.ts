import { SearchFullNameType } from "../../types/types";

export const TypesSearch = {
  SET_SEARCH: '/reducers/search/SET_SEARCH' as const,
  LOAD_SEARCH: '/reducers/search/LOAD_SEARCH' as const,
  NOT_FOUND_ANY: '/reducers/search/NOT_FOUND_ANY' as const,
};

export const searchActions = {
  setSearchAnswer: (searchUser: Array<SearchFullNameType>) => ({
    type: TypesSearch.SET_SEARCH,
    payload: searchUser,
  }),
  loadSearch: (text: string) => ({
    type: TypesSearch.LOAD_SEARCH,
    payload: text,
  }),
  notFoundAny: (text: string) => ({
    type: TypesSearch.NOT_FOUND_ANY,
    payload: text
  }),
};

