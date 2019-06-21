import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import UnAuthorizePage from "../components/pages/UnAuthorizePage";
import routes from "./routes";
import DashBoard from "../components/pages/dashboard/dashboard";

export default class RouteComponents extends React.Component {
  render() {
    return (
      <Switch>
        <Route
          path="/"
          render={() => (
            <Redirect
              to={{
                pathname: routes.dashboard
              }}
            />
          )}
          exact
        />
        <PrivateRoute component={DashBoard} path={routes.dashboard} />
        <Route path={routes.unauthorized} component={UnAuthorizePage} />
      </Switch>
    );
  }
}

export const PrivateRoute = ({ component: Component, ...rest }) => {
  /** mock as authenticated */
  let isAuth = true;
  return (
    <Route
      {...rest}
      render={props =>
        isAuth ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: routes.dashboard,
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
};
