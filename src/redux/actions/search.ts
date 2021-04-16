import { SearchFullNameType } from "../../types/types";

export const TypesSearch = {
  SET_SEARCH: '/reducers/search/SET_SEARCH' as const,
  LOAD_SEARCH: '/reducers/search/LOAD_SEARCH' as const,
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

};

