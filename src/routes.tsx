import { HashRouter, Redirect, Route, Switch } from 'react-router-dom';

import Demo from './pages/Demo';
import { Home } from './pages/Home';
import { Success } from './pages/Success';

function Routes() {
  return (
    <HashRouter>
      <Switch>
        <Route path="/" exact render={() => <Redirect to="/login" />} />
        <Route path="/login" exact component={Demo} />
        <Route path="/success" component={Success} />
        <Route path="/home" component={Home} />
        {/* <Route path="/chat" exact component={} /> */}
      </Switch>
    </HashRouter>
  );
}

export default Routes;
