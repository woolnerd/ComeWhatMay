import {
    RECEIVE_ALL_PLANS,
    RECEIVE_PLAN,
    REMOVE_PLAN
} from "../actions/disaster_plan_actions";
import { RECEIVE_USER_LOGOUT} from "../actions/session_actions";

const disasterPlanReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = {...state}
    switch (action.type) {
      case RECEIVE_ALL_PLANS:
        action.plans.data.forEach((plan) => {
          newState[plan._id] = plan;
        });
        return newState;
      case RECEIVE_PLAN:
        return { ...state, [action.plan.data._id]: action.plan.data };
      case REMOVE_PLAN:
        delete newState[action.id];
        return newState;
      case RECEIVE_USER_LOGOUT:
        return {};
      default:
        return state;
    }
}

export default disasterPlanReducer;