import React from 'react';
import { Home, Login, UserProfile, NotFound } from './pages/index';

import { Route, Switch } from 'react-router-dom';

const App = () => {

  return (
    <Switch>
      <Route exact path="/dashboard/" component={Login} />
      <Route path="/dashboard/home" component={Home} />
      <Route path="/dashboard/user/" component={UserProfile} />
      <Route path="/dashboard/*" component={NotFound} />

    </Switch>
  );
};

export default App
