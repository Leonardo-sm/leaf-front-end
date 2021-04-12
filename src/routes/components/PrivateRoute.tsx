import { Redirect, Route, RouteComponentProps } from 'react-router-dom';

import { ReactNode } from 'react';
import { RootState } from '../../stores/store';
import { useSelector } from 'react-redux';

interface PrivateRouteProps {
  component: any;
  path: any;
}

function PrivateRoute({
  component: Component,
  path,
  ...rest
}: PrivateRouteProps) {
  const session = useSelector((state: RootState) => state.session);

  return (
    <Route
      {...rest}
      render={(props) =>
        session.isLogged ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: '/', state: { from: props.location } }} />
        )
      }
    />
  );
}

export default PrivateRoute;
