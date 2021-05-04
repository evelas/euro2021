
import searchReducer, {InitialStateSearchType} from '../search';
import {searchActions } from '../../actions';

describe("should correct search logic work", () => {
  let state: InitialStateSearchType;

  beforeEach(() => {
      state = {
          searchAnswer: [
              {
                  id: 0, fullName: 'Nick'
              },
              {
                  id: 1, fullName: 'Nick 1'
              },
              {
                  id: 2, fullName: 'Nick 2'
              },
              {
                  id: 3, fullName: 'Nick 3'
              },
          ],
          notFound: '',
          isFetching: false,
      }
  })

  test('set search answer', () => {
      const newState = searchReducer(state, searchActions.setSearchAnswer([{id: 0, fullName: 'Nick'}]))
      expect(newState.searchAnswer).toStrictEqual([{id: 0, fullName: 'Nick'}]);
      expect(newState.searchAnswer.length).toBe(1);
  })

  test('isFetching', () => {
    const newState = searchReducer(state, searchActions.toggleIsFetching(true))
    expect(newState.isFetching).toBeTruthy();
  })

  test('set notFound', () => {
    const newState = searchReducer(state, searchActions.notFoundAny('notFound'))
    expect(newState.notFound).toBe('notFound');
  })

  test('default state', () => {
    const newState = searchReducer(state, searchActions.loadSearch(''))
    expect(newState).toBe(state);
  })

});
