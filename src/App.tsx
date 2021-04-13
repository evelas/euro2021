import React from 'react';
import { Home, Login } from './pages/index';

import { Route, Switch, withRouter } from 'react-router-dom';

const App = withRouter(() => {
  return (
    <Switch>
      <Route path="/" component={Login} exact />
      <Route path="/дом" component={Home} />

    </Switch>
  );
});

export default App
