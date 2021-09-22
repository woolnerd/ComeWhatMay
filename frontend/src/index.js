import React from "react";
import ReactDOM from "react-dom";
import Root from "./components/root";
import "./reset.css"
import "./index.css";

import configureStore from "./store/store";
import jwt_decode from "jwt-decode";
import { setAuthToken } from "./util/session_api_util";
import { logout, login } from "./actions/session_actions";
import * as ProfileUtils from "./actions/profile_actions";
import * as RelativeUtils from "./actions/relative_actions";
import * as DisasterPlanUtils from "./actions/disaster_plan_actions";
import * as ActionStepUtils from "./actions/action_steps";
import * as DisasterDrillUtils from "./actions/disaster_drill_actions";

import { testRoute } from "./util/profile_util"

document.addEventListener("DOMContentLoaded", () => {
  let store;

  if (localStorage.jwtToken) {
    setAuthToken(localStorage.jwtToken);
    const decodedUser = jwt_decode(localStorage.jwtToken);
    const preloadedState = {
      session: { isAuthenticated: true, user: decodedUser },
    };

    store = configureStore(preloadedState);

    const currentTime = Date.now() / 1000;

    if (decodedUser.exp < currentTime) {
      store.dispatch(logout());
      window.location.href = "/";
    }
  } else {
    store = configureStore({});
  }
  const root = document.getElementById("root");

  window.store = store;
  window.logout = logout
  window.login = login; 

  // profile actions
  window.createUserProfile = ProfileUtils.createUserProfile
  window.fetchUserProfile = ProfileUtils.fetchUserProfile
  window.updateUserProfile = ProfileUtils.updateUserProfile
  window.deleteUserProfile = ProfileUtils.deleteUserProfile
  window.testRoute = testRoute;

  //relative actions
  window.fetchRelative = RelativeUtils.fetchRelative
  window.fetchAllRelatives = RelativeUtils.fetchAllRelatives
  window.createRelative = RelativeUtils.createRelative
  window.updateRelative = RelativeUtils.updateRelative
  window.deleteRelative = RelativeUtils.deleteRelative

  //disaster plan actions
  window.fetchDisasterPlans = DisasterPlanUtils.fetchDisasterPlans
  window.createDisasterPlan = DisasterPlanUtils.createDisasterPlan
  window.updateDisasterPlan = DisasterPlanUtils.updateDisasterPlan
  window.deleteDisasterPlan = DisasterPlanUtils.deleteDisasterPlan

  //action step actions
  window.createActionStep = ActionStepUtils.createActionStep
  window.updateActionStep = ActionStepUtils.updateActionStep
  window.deleteActionStep = ActionStepUtils.deleteActionStep

  //disaster drill actions
  window.fetchDisasterDrills = DisasterDrillUtils.fetchDisasterDrills
  window.createDisasterDrill = DisasterDrillUtils.createDisasterDrill
  window.updateDisasterDrill = DisasterDrillUtils.updateDisasterDrill
  window.deleteDisasterDrill = DisasterDrillUtils.deleteDisasterDrill

  ReactDOM.render(<Root store={store} />, root);
});
