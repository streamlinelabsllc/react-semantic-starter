import { Component } from "react";
import { Route, Redirect, RouterProps, RouteProps } from "react-router-dom";
import { isLoggedIn } from "../helpers";

type PublicRouteProps = RouteProps & {
  component: any;
  restricted: boolean;
};

export const PublicRoute = ({
  component: Component,
  restricted,
  ...rest
}: PublicRouteProps) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        isLoggedIn() && restricted ? (
          <Redirect to="/dashboard" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};
