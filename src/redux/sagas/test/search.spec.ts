import { TypesSearch } from './../../actions/search';
import { takeEvery } from 'redux-saga/effects';
import { workerGetSearch, watchSearchAnswers } from '../search';

describe('fetchSearchAnswerFromApi', () => {
  const genObject = watchSearchAnswers();

  it('should wait for every LOAD_SEARCH action and call workerGetSearch', () => {
    expect(genObject.next().value)
      .toEqual(takeEvery(TypesSearch.LOAD_SEARCH as string, workerGetSearch));
  });

});
