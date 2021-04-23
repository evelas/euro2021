import authReducer, {InitialStateAuthType} from '../auth';
import { authActions } from '../../actions';

describe("should correct auth logic work", () => {
  let state: InitialStateAuthType;

  beforeEach(() => {
      state = {
          profile: null,
          isFetching: false,
          isAuth: false,
          isTryTime: false,
          formError: ''
      }
  })

  test('set profile information', () => {
      const newState = authReducer(state, authActions.setAuthUserData({id: 0, email: 'evelas94@gmail.com'}, true));
      expect(newState.profile).toStrictEqual({id: 0, email: 'evelas94@gmail.com'});
      expect(newState.isAuth).toBeTruthy();
  })

  test('set isTryTime', () => {
    const newState = authReducer(state, authActions.setTryTimeButton(true));
    expect(newState.isTryTime).toBeTruthy();
  })

  test('isFetching', () => {
    const newState = authReducer(state, authActions.toggleIsFetching(true));
    expect(newState.isFetching).toBeTruthy();
  })

  test('form Error', () => {
    const newState = authReducer(state, authActions.addError('Не правильный пароль'));
    expect(newState.formError).toBe('Не правильный пароль');
  })

  test('Reset Error', () => {
    const newState = authReducer(state, authActions.resetError());
    expect(newState.formError).toBe('');
  })

  test('default state', () => {
    const newState = authReducer(state, authActions.loadUserData())
    expect(newState).toBe(state);
  })

});
