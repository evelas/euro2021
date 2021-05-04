import { applyMiddleware, createStore } from 'redux';
import reducers from './reducers';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/sagas';
// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';


const saga = createSagaMiddleware();

// const persistConfig = {
//   key: 'root',
//   storage,
// };
// const persistedReducer = persistReducer(persistConfig, reducers);


// const configureStore = () => {
//   const store = createStore(persistedReducer, applyMiddleware(saga));
//   // eslint-disable-next-line
//   // @ts-ignore
//   window.store = store;

//   saga.run(rootSaga);
//   const persistor = persistStore(store);
//   return { store, persistor };
// };

// export default configureStore;



// eslint-disable-next-line
// @ts-ignore
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const store = createStore(reducers, composeEnhancers(applyMiddleware(saga)));
const store = createStore(reducers, applyMiddleware(saga));
saga.run(rootSaga);
// eslint-disable-next-line
// @ts-ignore
window.store = store;

export default store;

