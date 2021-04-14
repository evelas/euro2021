import { combineReducers } from 'redux';

// import { LoginFormValuesType, ServerResponse, ProfileType } from './../../types/types';

import auth from './auth';
import { reducer as form } from 'redux-form';

const reducers = combineReducers({
  auth,
  form

});

type RootReducerType = typeof reducers;
export type AppStateType = ReturnType<RootReducerType>;


// eslint-disable-next-line
export type InferActionsTypes<T> = T extends { [keys: string]: (...args: any[]) => infer U }
  ? U
  : never;

export default reducers;

