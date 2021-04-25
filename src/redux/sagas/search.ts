import { searchApi } from './../../api/searchApi';
import * as Effects from "redux-saga/effects";
import { searchActions, TypesSearch } from '../actions/search';
import { ApiTypes } from "../../api/api";

import { SearchFullNameType, ActionType } from './../../types/types';
import { resultCodeEnum } from '../../enum/resultCode';


// Поиск пользователя по фамилии или логину
async function getSearch(textSearch: string) {
  const response = await searchApi.getSearch(textSearch);
  return response.data;
}

export function* workerGetSearch(action: ActionType<string, string>): Generator<Effects.StrictEffect, void, never> {
  try {
    const data: ApiTypes<Array<SearchFullNameType>> = yield Effects.call(getSearch, action.payload);
    yield Effects.put(searchActions.toggleIsFetching(true));
    switch(data.resultCode) {
      case resultCodeEnum.Success:
        yield Effects.put(searchActions.setSearchAnswer(data.items));
        yield Effects.delay(1700);
        yield Effects.put(searchActions.toggleIsFetching(false));
        break;
      case resultCodeEnum.NotFound:
        yield Effects.put(searchActions.setSearchAnswer(null));
        yield Effects.put(searchActions.notFoundAny(data.message));
        yield Effects.delay(1700);
        yield Effects.put(searchActions.toggleIsFetching(false));
        break;
      default:
        break;
    }
  } catch (e) {
    // console.log(e);
  }
}

export function* watchSearchAnswers() {
  yield Effects.takeEvery(TypesSearch.LOAD_SEARCH as never, workerGetSearch);
}
