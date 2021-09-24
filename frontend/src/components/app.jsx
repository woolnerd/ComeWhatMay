import React from "react";
import { Route } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Switch } from "react-router-dom";
import NavBarContainer from "./navbar/navbar_container";
// import DisasterPlansIndexContainer from "./disaster_plans/disaster_plans_index_container";
import DisasterPlanShowContainer from "./action_steps/action_step_index"
import LandingPage from "./landing_page/landing_page";
import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";
import ProfileContainer from "./profile/profile_container";
import CreateProfileFormContainer from "./profile/create_profile_form";
// import EditProfileFormContainer from "./profile/edit_profile_form";
import Modal from "./modal/modal"
import { Footer } from "../components/footer/footer"

const App = () => (
    <div>
      <Modal />
      <NavBarContainer />
      <Switch>
        <Route exact path ="/profile/new" component={CreateProfileFormContainer} />
        {/* <ProtectedRoute exact path ="/profile/edit" component={EditProfileFormContainer} /> */}
        <ProtectedRoute exact path="/profile/:profileId" component={ProfileContainer} />
        {/* <ProtectedRoute exact path="/profile/:profileId" component={DisasterPlansIndexContainer} /> */}
        {/* <ProtectedRoute exact path="/disaster/:disasterId" component={DisasterPlanShowContainer} /> */}
        <ProtectedRoute exact path="/disaster-plan/:planId" component={DisasterPlanShowContainer} />
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
        <AuthRoute exact path="/" component={LandingPage} />
      </Switch>
      <Footer />
    </div>
);

export default App;
