import { SearchFullNameType, ActionType } from './../../../types/types';
import { ApiTypes } from './../../../api/api';
import { searchApi } from './../../../api/searchApi';
import { runSaga } from 'redux-saga';
import { TypesSearch } from './../../actions/search';
import { takeEvery } from 'redux-saga/effects';
import { workerGetSearch, watchSearchAnswers } from '../search';

describe('fetchSearchAnswerFromApi', () => {
  const genObject = watchSearchAnswers();

  it('should wait for every LOAD_SEARCH action and call workerGetSearch', () => {
    expect(genObject.next().value)
      .toEqual(takeEvery(TypesSearch.LOAD_SEARCH as never, workerGetSearch));
  });

  it('should call api', async () => {
    const dispatched: Array<string> = [];
    const apiResult: ApiTypes<Array<SearchFullNameType>> = {
      resultCode: 0,
      items: [{ id: 147, fullName: 'Романова Елизавета Романовна' }],
      message: 'Найдены следующие пользователи'
    }

    // const request = jest.spyOn(searchApi, 'getSearch')
    //   .mockImplementation(() => Promise.resolve(apiResult) as never);
    const request = searchApi.getSearch = jest.fn(() => Promise.resolve(apiResult) as never)

    const action: ActionType<string, string> = {
      type: TypesSearch.LOAD_SEARCH,
      payload: 'Романова Елизавета Романовна'
    };

    await runSaga({
      getState: () => ({notFound: '1'}),
      dispatch: ({payload}) => dispatched.push(payload),
      // eslint-disable-next-line
      // @ts-ignore
    }, workerGetSearch, action).done;

    expect(request).toHaveBeenCalledTimes(1);

    // expect(dispatched).toEqual([searchActions.setSearchAnswer(apiResult.items)]);
    request.mockClear();
  });


});
