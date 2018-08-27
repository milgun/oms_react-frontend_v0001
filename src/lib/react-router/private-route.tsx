import * as React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';

interface IRouteProps extends RouteProps {
  isAuth: boolean;
}

const PrivateRoute: React.StatelessComponent<IRouteProps> = ({
  component,
  isAuth,
  ...rest
}) => {
  const renderFn = (Component: any) => (props: RouteProps) => {
    alert(isAuth);
    if (isAuth) {
      return <Component {...props} />;
    }
    const redirectProps = {
      to: {
        pathname: '/signin',
        state: { from: props.location },
      },
    };
    return <Redirect {...redirectProps} />;
  };

  return <Route {...rest} render={renderFn(component)} />;
};

export default PrivateRoute;
