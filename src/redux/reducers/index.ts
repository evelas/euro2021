import { combineReducers } from 'redux';

import auth from './auth';

const reducers = combineReducers({
  auth
});

type RootReducerType = typeof reducers;
export type AppStateType = ReturnType<RootReducerType>;


// eslint-disable-next-line
export type InferActionsTypes<T> = T extends { [keys: string]: (...args: any[]) => infer U }
  ? U
  : never;

export default reducers;

