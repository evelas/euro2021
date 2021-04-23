import oneUserReducer, {InitialStateUserProfileType} from '../userProfile';
import { userProfileActions } from '../../actions';

describe("should correct userProfile logic work", () => {
  let state: InitialStateUserProfileType;

  beforeEach(() => {
      state = {
          userData: null,
          isFetching: false,
          notFound: ''
      }
  })

  test('set user information', () => {
      const newState = oneUserReducer(state, userProfileActions.setUser(null));
      expect(newState.userData).toBe(null);
  })

  test('set notFound', () => {
    const newState = oneUserReducer(state, userProfileActions.notFoundUser('notFound'));
    expect(newState.notFound).toBe('notFound');
  })

  test('isFetching', () => {
    const newState = oneUserReducer(state, userProfileActions.toggleIsFetching(true));
    expect(newState.isFetching).toBeTruthy();
  })

  test('default state', () => {
    const newState = oneUserReducer(state, userProfileActions.loadOneUser(''))
    expect(newState).toBe(state);
  })

});
