import React from "react";
import { connect } from "react-redux";
import { Route, Redirect, withRouter } from "react-router-dom";

//if not logged in you are redirected to Auth route
const Auth = ({ component: Component, path, loggedIn, exact }) => (
  <Route
    path={path}
    exact={exact}
    render={(props) =>
      !loggedIn ? (
        <Component {...props} />
      ) : (
          //what is the route here? 
        <Redirect to="/profile" />
      )
    }
  />
);

//if logged in you cannot see login or signup routes
const Protected = ({ component: Component, loggedIn, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      loggedIn ? (
        <Component {...props} />
      ) : (
        <Redirect to="/" />
      )
    }
  />
);


const mapStateToProps = (state) => ({
  loggedIn: state.session.isAuthenticated,
});

export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));

export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));
