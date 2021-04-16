
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './scss/app.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
// import createAppStore from './redux/redux-store';
// import { PersistGate } from 'redux-persist/integration/react';
// const { persistor, store } = createAppStore();
import store from './redux/redux-store';

ReactDOM.render(
  <Router basename={process.env.PUBLIC_URL + "/dashboard/"}>
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate> */}
      <App />
    </Provider>
  </Router>,
  document.getElementById('root'),
);

