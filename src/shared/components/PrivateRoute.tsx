import { Route, Redirect, RouteProps } from "react-router-dom";
import { isLoggedIn } from "../helpers";

type PrivateRouteProps = RouteProps & {
  component: any;
};

export const PrivateRoute = ({
  component: Component,
  ...rest
}: PrivateRouteProps) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        isLoggedIn() ? <Component {...props} /> : <Redirect to="/signin" />
      }
    />
  );
};
