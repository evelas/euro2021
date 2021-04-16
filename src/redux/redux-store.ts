import { applyMiddleware, createStore, compose } from 'redux';
import reducers from './reducers';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/sagas';

const saga = createSagaMiddleware();
// eslint-disable-next-line
// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(saga)));

saga.run(rootSaga);
// eslint-disable-next-line
// @ts-ignore
window.store = store;

export default store;

