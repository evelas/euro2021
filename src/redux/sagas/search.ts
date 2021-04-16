import { searchApi } from './../../api/searchApi';
import * as Effects from "redux-saga/effects";
import { searchActions, TypesSearch } from '../actions/search';
import { ApiTypes } from "../../api/api";

import { PayloadType, SearchFullNameType } from './../../types/types';

// Поиск пользователя по фамилии или логину
async function getSearch(textSearch: string) {
  const response = await searchApi.getSearch(textSearch);
  return response.data;
}

function* workerGetSearch(action: PayloadType<string>): Generator<Effects.StrictEffect, void, never> {
  try {
    const data: ApiTypes<Array<SearchFullNameType>> = yield Effects.call(getSearch, action.payload);
    console.log('search', data)
    yield Effects.put(searchActions.setSearchAnswer(data.items));
  } catch (e) {
    console.log(e);
  }
}

export function* watchSearchProducts() {
  yield Effects.takeEvery(TypesSearch.LOAD_SEARCH as never, workerGetSearch);
}
