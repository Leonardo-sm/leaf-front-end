import { HashRouter, Redirect, Route, Switch } from 'react-router-dom';

import { Home } from '../pages/Home';
import Login from '../pages/Login';
import PrivateRoute from './components/PrivateRoute';
import { Success } from '../pages/Success';

function Routes() {
  return (
    <HashRouter>
      <Switch>
        <Route path="/" exact render={() => <Redirect to="/login" />} />
        <Route path="/login" component={Login} />
        <Route path="/success" component={Success} />
        <PrivateRoute path="/home" component={Home} />
      </Switch>
    </HashRouter>
  );
}

export default Routes;
