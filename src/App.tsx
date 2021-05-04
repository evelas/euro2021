import React from 'react';
import { Home, Login, UserProfile, NotFound, Recruit } from './pages/index';
import { Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import history from './helpers/history';
// import createAppStore from './redux/redux-store';
// import { PersistGate } from 'redux-persist/integration/react';
// const { persistor, store } = createAppStore();
import store from './redux/redux-store';
const App = () => {
  return (
    <Router history={history}>
      <Provider store={store}>
        {/* <PersistGate loading={null} persistor={persistor}> */}
          <Switch>
            <Route exact path="/dashboard/" component={Login} />
            <Route exact path="/dashboard/home" component={Home} />
            <Route path="/dashboard/user/" component={UserProfile} />
            <Route exact path="/dashboard/recruit" component={Recruit} />
            <Route path="/dashboard/*" component={NotFound} />
          </Switch>
        {/* </PersistGate> */}
      </Provider>
    </Router>
  );
};

export default App
