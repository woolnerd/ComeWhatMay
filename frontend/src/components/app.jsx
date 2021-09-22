import React from "react";
import { Route } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Switch } from "react-router-dom";
import NavBarContainer from "./navbar/navbar_container";

import LandingPage from "./landing_page/landing_page";
import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";
import ProfileContainer from "./profile/profile_container";
import CreateProfileFormContainer from "./profile/create_profile_form";
// import EditProfileFormContainer from "./profile/edit_profile_form";
import Modal from "./modal/modal"

const App = () => (
    <div>
      <Modal />
      <NavBarContainer />
      <Switch>
        <Route exact path ="/profile/new" component={CreateProfileFormContainer} />
        {/* <ProtectedRoute exact path ="/profile/edit" component={EditProfileFormContainer} /> */}
        <ProtectedRoute exact path="/profile/:profileId" component={ProfileContainer} />
        <AuthRoute exact path="/" component={LandingPage} />
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
      </Switch>
    </div>
);

export default App;
