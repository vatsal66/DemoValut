import React from "react";
import { Route, Switch, Redirect, BrowserRouter } from "react-router-dom";

// components
import Layout from "./Layout";

// pages
import Error from "../pages/error";

// context
import { useUserState } from "../context/UserContext";

export default function App() {
  // global
  var { isAuthenticated } = useUserState();

  return (
    <>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/overview" />} />
        <PublicRoute path="/" component={Layout} />
        <Route component={Error} />
      </Switch>
    </BrowserRouter>
    </>
  );

  // #######################################################################

  function PublicRoute({ component, ...rest }) {
    return (
      <Route
        {...rest}
        render={props =>
          isAuthenticated ? (
            <Redirect
              to={{
                pathname: "/",
              }}
            />
          ) : (
            React.createElement(component, props)
          )
        }
      />
    );
  }
}
