import { HashRouter, Redirect, Route, Switch } from 'react-router-dom';

import Login from './pages/Login';

function Routes() {
  return (
    <HashRouter>
      <Switch>
        <Route path="/" exact render={() => <Redirect to="/login" />} />
        <Route path="/login" exact component={Login} />
        {/* <Route path="/chat" exact component={} /> */}
      </Switch>
    </HashRouter>
  );
}

export default Routes;
