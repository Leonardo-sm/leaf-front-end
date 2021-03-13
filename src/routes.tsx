import { HashRouter, Redirect, Route, Switch } from 'react-router-dom';

import Demo from './pages/Demo';

function Routes() {
  return (
    <HashRouter>
      <Switch>
        <Route path="/" exact render={() => <Redirect to="/login" />} />
        <Route path="/login" exact component={Demo} />
        {/* <Route path="/chat" exact component={} /> */}
      </Switch>
    </HashRouter>
  );
}

export default Routes;
