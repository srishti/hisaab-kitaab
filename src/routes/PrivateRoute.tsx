import React from "react";
import { Route, Redirect, RouteProps } from "react-router-dom";
import { RoutePath } from "./routes";
import { useAuth } from "../hooks/auth/use-auth";

const PrivateRoute: React.FC<RouteProps> = (props) => {
  let auth = useAuth();

  const { children, ...rest } = props;

  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth.isLoggedIn ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: RoutePath.Login,
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
