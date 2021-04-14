import React from 'react';
import { Home, Login, NotFound } from './pages/index';

import { Route, Switch, withRouter } from 'react-router-dom';

const App = withRouter(() => {
  return (
    <Switch>
      <Route exact path="/dashboard/" component={Login} />
      <Route path="/dashboard/home2" component={Home} />
      <Route path="/dashboard/*" component={NotFound} />

    </Switch>
  );
});

export default App
