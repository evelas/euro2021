import { combineReducers } from 'redux';

import auth from './auth';
import search from './search'
import userProfile from './userProfile'

const reducers = combineReducers({
  auth,
  search,
  userProfile,
});

type RootReducerType = typeof reducers;
export type testAuth = ReturnType<typeof auth>;
export type AppStateType = ReturnType<RootReducerType>;


// eslint-disable-next-line
export type InferActionsTypes<T> = T extends { [keys: string]: (...args: any[]) => infer U }
  ? U
  : never;

export default reducers;

