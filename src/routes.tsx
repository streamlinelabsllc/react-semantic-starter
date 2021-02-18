import { BrowserRouter, Switch } from "react-router-dom";

import { PrivateRoute } from "./shared/components/PrivateRoute";
import { PublicRoute } from "./shared/components/PublicRoute";

export const MainRoutes = () => (
  <BrowserRouter>
    <Switch>
      <PublicRoute
        restricted={false}
        component={() => <div>Home</div>}
        path="/"
        exact
      />
      <PublicRoute
        restricted={true}
        component={() => <div>Sign In</div>}
        path="/signin"
        exact
      />
      <PrivateRoute
        component={() => <div>Dashboard</div>}
        path="/dashboard"
        exact
      />
    </Switch>
  </BrowserRouter>
);
