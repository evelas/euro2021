import React from 'react';
import { Home, Login, UserProfile, NotFound } from './pages/index';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import createAppStore from './redux/redux-store';
import { PersistGate } from 'redux-persist/integration/react';
const { persistor, store } = createAppStore();

const App = () => {
  return (
    <Router>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Switch>
            <Route exact path="/dashboard/" component={Login} />
            <Route path="/dashboard/home" component={Home} />
            <Route path="/dashboard/user/" component={UserProfile} />
            <Route path="/dashboard/*" component={NotFound} />
          </Switch>
        </PersistGate>
      </Provider>
    </Router>
  );
};

export default App
